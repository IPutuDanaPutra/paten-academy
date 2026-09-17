"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "program", label: "Program" },
  { id: "curriculum", label: "Curriculum" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const link of LINKS) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  function go(id: string) {
    setMobileOpen(false);
    scrollToId(id);
  }

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 font-label">
      {/* Desktop pill */}
      <div className="navbar-glass hidden md:flex items-center gap-1 rounded-full pl-5 pr-5 py-2">
        <div className="relative shrink-0 mr-2" style={{ width: 96, height: 20 }}>
          <Image
            src="/logo/paten-academy-full.png"
            alt="Paten Academy"
            fill
            sizes="96px"
            className="object-contain object-left"
            priority
          />
        </div>
        {LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => go(link.id)}
            className={`nav-link px-4 py-2 text-xs ${
              active === link.id ? "nav-link-active" : "text-ink/70"
            }`}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => go("apply")}
          className="btn-primary-tactile text-white text-xs font-semibold px-5 py-2.5 ml-2"
        >
          Apply Now
        </button>
      </div>

      {/* Mobile compact pill — wordmark, Apply Now (always visible), menu toggle */}
      <div className="navbar-glass md:hidden flex items-center gap-2 rounded-full pl-3 pr-5 py-2">
        <div className="relative shrink-0" style={{ width: 72, height: 16 }}>
          <Image
            src="/logo/paten-academy-full.png"
            alt="Paten Academy"
            fill
            sizes="72px"
            className="object-contain object-left"
            priority
          />
        </div>
        <button
          onClick={() => go("apply")}
          className="btn-primary-tactile text-white text-[11px] font-semibold px-3 py-1.5 whitespace-nowrap"
        >
          Apply Now
        </button>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          className="btn-tactile w-8 h-8 shrink-0 rounded-full bg-white/70 flex items-center justify-center"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar-glass md:hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 rounded-xl flex flex-col p-2 gap-1">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`nav-link px-4 py-2.5 text-xs text-left ${
                active === link.id ? "nav-link-active" : "text-ink/70"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
