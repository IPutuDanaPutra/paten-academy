import { content } from "@/lib/content";
import { IconBadge } from "@/components/IconBadge";
import { TiltCard } from "@/components/TiltCard";
import type { IconName } from "@/lib/icons";

// A couple of icons get a fixed, slight rotation — a small hand-crafted
// imperfection rather than machine-perfect uniformity (Part 10 §2.3).
const ROTATED_TITLES = new Set(["Tool Curation", "No-Code / Low-Code Prototyping"]);

function LearnCard({ item }: { item: (typeof content.learn)[number] }) {
  const rotate = ROTATED_TITLES.has(item.title);
  return (
    <TiltCard className="card-tactile p-6">
      <div className={rotate ? "inline-block -rotate-3" : "inline-block"}>
        <IconBadge
          name={item.icon as IconName}
          tone={"highlight" in item && item.highlight ? "accent" : "default"}
        />
      </div>
      <h3 className="font-serif italic text-lg mt-4">{item.title}</h3>
      <p className="text-muted mt-1">{item.body}</p>
    </TiltCard>
  );
}

export function Learn() {
  const [row1, row2] = [content.learn.slice(0, 3), content.learn.slice(3)];

  return (
    <section id="program" className="relative max-w-6xl mx-auto px-6 py-24 scroll-mt-28">
      <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight text-center">
        What You&apos;ll Learn
      </h2>

      <p className="mt-8 text-lg sm:text-xl text-center max-w-2xl mx-auto text-ink">
        {content.learningObjective.statement}
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 font-label text-xs uppercase tracking-widest text-muted">
        {content.learningObjective.pillars.map((pillar) => (
          <span key={pillar}>{pillar}</span>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-14">
        {row1.map((item) => (
          <LearnCard key={item.title} item={item} />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-6 sm:max-w-2xl sm:mx-auto">
        {row2.map((item) => (
          <LearnCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
