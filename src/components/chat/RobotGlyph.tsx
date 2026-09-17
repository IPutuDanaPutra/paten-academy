"use client";

import { useEffect, useState } from "react";

export function RobotGlyph() {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function scheduleBlink() {
      const delay = 4000 + Math.random() * 2000;
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        scheduleBlink();
      }, delay);
    }
    scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <svg
      viewBox="0 0 40 40"
      width="26"
      height="26"
      fill="none"
      className="group-hover:[&_.antenna-tip]:fill-accent"
    >
      <line x1="20" y1="6" x2="20" y2="11" stroke="currentColor" strokeWidth="2" />
      <circle className="antenna-tip transition-colors duration-150" cx="20" cy="4.5" r="2.5" fill="currentColor" />
      <rect x="7" y="11" width="26" height="22" rx="7" stroke="currentColor" strokeWidth="2" />
      <rect
        x="14"
        y="20"
        width="4"
        height={blink ? 1 : 4}
        rx="1.5"
        fill="currentColor"
        style={{ transformOrigin: "center" }}
      />
      <rect
        x="22"
        y="20"
        width="4"
        height={blink ? 1 : 4}
        rx="1.5"
        fill="currentColor"
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}
