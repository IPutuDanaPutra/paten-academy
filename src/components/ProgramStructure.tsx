import { content } from "@/lib/content";

function PhaseColumn({ phase }: { phase: (typeof content.programStructure)[number] }) {
  return (
    <div className="timeline-node">
      <span className="dot" />
      <p className="font-label text-xs text-accent uppercase tracking-widest">{phase.phase}</p>
      <h3 className="font-serif italic text-lg mt-1">{phase.title}</h3>
      <ul className="mt-4 space-y-3">
        {phase.items.map((item) => (
          <li key={item.label} className="text-sm text-white/60 leading-relaxed">
            <span className="text-paper font-label font-semibold">{item.label}.</span>{" "}
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProgramStructure() {
  return (
    <div id="curriculum" className="relative scroll-mt-28">
      {/* diagonal divider entering the dark section */}
      <div
        className="h-12 sm:h-20 bg-ink"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      {/* confirm: deck states 8 weeks in 3 places, but Phase 2/3 timeline math
          still sums closer to 12 — recommend using the Curriculum Overview
          table's clean Week 1-8 structure as the source of truth if this
          needs resolving before launch. */}
      <section className="relative bg-ink text-paper py-24 dot-grid-dark">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-label text-xs uppercase tracking-widest text-accent">
            {content.durationWeeks} Weeks
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight mt-2">
            Program Structure
          </h2>

          <div className="timeline-track gap-8 mt-20">
            {content.programStructure.map((phase) => (
              <PhaseColumn key={phase.phase} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      {/* diagonal divider leaving the dark section */}
      <div
        className="h-12 sm:h-20 bg-ink"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
    </div>
  );
}
