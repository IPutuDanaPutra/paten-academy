"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ChatMessage = { role: "user" | "assistant"; content: string };

type ChatContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  messages: ChatMessage[];
  isStreaming: boolean;
  send: (text: string) => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // React's setState updater functions don't run synchronously — under
  // automatic batching they're invoked only once the current event handler
  // finishes, which is *after* a same-tick call to runStream() further down.
  // That meant runStream received the array from before the user's message
  // was appended (an empty array on the very first message), so the model
  // never actually saw the question — this ref is the synchronous source of
  // truth instead, and setMessages is just used to trigger a re-render.
  const messagesRef = useRef<ChatMessage[]>([]);

  const applyMessages = useCallback((next: ChatMessage[]) => {
    messagesRef.current = next;
    setMessages(next);
  }, []);

  const send = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setIsOpen(true);
    const updated: ChatMessage[] = [...messagesRef.current, { role: "user", content: trimmed }];
    applyMessages(updated);
    runStream(updated);

    async function runStream(history: ChatMessage[]) {
      // Cancel any still-in-flight previous request. Its own catch block
      // below detects the abort and bails out instead of clobbering this
      // (newer) request's message with a fake error.
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const isCurrent = () => abortRef.current === controller;

      setIsStreaming(true);
      applyMessages([...messagesRef.current, { role: "assistant", content: "" }]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });

        if (!res.ok) {
          console.error("Chat request failed:", res.status, await res.text());
          throw new Error(`Chat request failed with status ${res.status}`);
        }
        if (!res.body) throw new Error("No response body");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          if (!isCurrent()) return;
          const chunk = decoder.decode(value, { stream: true });
          const copy = [...messagesRef.current];
          const last = copy[copy.length - 1];
          copy[copy.length - 1] = { ...last, content: last.content + chunk };
          applyMessages(copy);
        }
      } catch (err) {
        if (controller.signal.aborted) return; // superseded by a newer message, not a real error
        console.error("useChat error:", err);
        if (!isCurrent()) return;
        const copy = [...messagesRef.current];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "Something went wrong — please try again in a moment.",
        };
        applyMessages(copy);
      } finally {
        if (isCurrent()) setIsStreaming(false);
      }
    }
  }, [applyMessages]);

  const value: ChatContextValue = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    messages,
    isStreaming,
    send,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
