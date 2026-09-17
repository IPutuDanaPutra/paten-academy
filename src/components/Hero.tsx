import { content } from "@/lib/content";
import { PainterlyGradient } from "@/components/PainterlyGradient";

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-paper">
      <PainterlyGradient />
      <div className="hero-content relative mx-auto px-6 pb-24">
        <h1 className="hero-headline font-serif italic text-5xl sm:text-7xl lg:text-8xl leading-[1.05]">
          {content.hero.headlineLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-muted mx-auto max-w-xl">
          {content.hero.subhead}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#apply"
            className="btn-primary-tactile font-label inline-block text-white font-semibold px-8 py-4 text-base"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
