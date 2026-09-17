"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useChat } from "./ChatProvider";

const STARTERS = [
  "Who is this program for?",
  "What will I learn?",
  "How do I apply?",
];

export function ChatPanel() {
  const { isOpen, close, messages, isStreaming, send } = useChat();
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  if (!isOpen) return null;

  function submit(text: string) {
    setDraft("");
    send(text);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center sm:justify-end">
      <button
        aria-label="Close chat"
        onClick={close}
        className="absolute inset-0 bg-ink/20"
      />
      <div className="panel-in relative w-full sm:w-[400px] sm:mr-6 sm:mb-6 sm:max-h-[80vh] max-h-[85vh] bg-paper text-ink rounded-t-xl sm:rounded-xl border border-ink/10 flex flex-col overflow-hidden shadow-2xl" style={{ transformOrigin: "bottom right" }}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10 font-label text-xs">
          <span className="text-primary font-medium">Ask Paten AI</span>
          <button onClick={close} className="text-muted hover:text-ink">
            close ✕
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
          {messages.length === 0 && (
            <div className="space-y-3">
              <p className="text-muted font-label text-xs">
                Ask anything about the program. I only answer from what&apos;s
                confirmed on this page.
              </p>
              <div className="flex flex-col gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => submit(s)}
                    className="chat-surface-tactile text-left font-label text-xs text-ink rounded-lg px-3 py-2 hover:text-primary transition-colors"
                  >
                    &gt; {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) =>
            m.role === "user" ? (
              <div
                key={i}
                className="chat-bubble-primary ml-auto max-w-[85%] text-white rounded-lg rounded-br-sm px-3 py-2"
              >
                {m.content}
              </div>
            ) : (
              <div
                key={i}
                className="mr-auto max-w-[85%] font-label text-[13px] leading-relaxed px-1 text-ink"
              >
                {m.content}
                {isStreaming && i === messages.length - 1 && (
                  <span className="caret text-primary">_</span>
                )}
              </div>
            )
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(draft);
          }}
          className="border-t border-ink/10 p-3 flex gap-2 items-center"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a question..."
            className="chat-surface-tactile flex-1 text-ink rounded-full px-4 py-2 text-sm font-label outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            disabled={isStreaming || !draft.trim()}
            aria-label="Send"
            style={{ borderRadius: 9999 }}
            className="btn-primary-tactile w-9 h-9 shrink-0 flex items-center justify-center text-white disabled:opacity-40"
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </div>
  );
}
