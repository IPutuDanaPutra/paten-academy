import { content } from "@/lib/content";
import { PainterlyGradient } from "@/components/PainterlyGradient";

export function WhoFor() {
  return (
    <section className="relative overflow-hidden bg-paper py-24">
      <PainterlyGradient opacity={0.4} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif italic text-sm uppercase tracking-widest text-muted">
          Who This Is For
        </h2>
        <p className="mt-8 font-serif italic font-medium text-3xl sm:text-5xl leading-tight text-ink">
          &ldquo;{content.whoFor.quote}&rdquo;
        </p>
        <p className="mt-10 text-sm text-muted">
          {content.whoFor.chips.join(" · ")}
        </p>
      </div>
    </section>
  );
}
