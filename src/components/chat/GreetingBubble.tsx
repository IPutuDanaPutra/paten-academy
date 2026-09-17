"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useChat } from "./ChatProvider";

const SESSION_KEY = "paten_chat_greeting_seen";

export function GreetingBubble() {
  const { isOpen, open } = useChat();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const hideTimer = setTimeout(() => dismiss(), 10000);
    return () => clearTimeout(hideTimer);
  }, [visible]);

  useEffect(() => {
    if (isOpen) dismiss();
  }, [isOpen]);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (private mode, etc.) — fine to no-op
    }
  }

  if (!visible || isOpen) return null;

  return (
    <div className="chat-greeting-bubble font-label">
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute top-1.5 right-1.5 text-muted hover:text-ink"
      >
        <X size={13} />
      </button>
      <button
        onClick={() => {
          dismiss();
          open();
        }}
        className="text-left pr-3"
      >
        👋 Got questions? Chat with me!
      </button>
      <span className="chat-greeting-tail" aria-hidden />
    </div>
  );
}
