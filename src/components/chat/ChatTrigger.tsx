"use client";

import { useChat } from "./ChatProvider";
import { RobotGlyph } from "./RobotGlyph";

export function ChatTrigger() {
  const { open, isOpen } = useChat();

  if (isOpen) return null;

  return (
    <button
      onClick={open}
      aria-label="Ask Paten AI"
      className="btn-tactile bot-bob group fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-paper text-primary border border-ink/10 flex items-center justify-center hover:border-accent transition-colors"
    >
      <RobotGlyph />
    </button>
  );
}
