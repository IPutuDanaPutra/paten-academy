import Image from "next/image";
import { content } from "@/lib/content";

export function Community() {
  const logos = [...content.communities, ...content.communities];

  return (
    <section className="bg-ink/[0.03] py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight">
          Communities We&apos;re Connecting With
        </h2>
      </div>

      <div className="relative mt-12 mx-auto max-w-6xl overflow-hidden">
        <div className="marquee-track flex items-center gap-16 w-max">
          {logos.map((c, i) => (
            <div key={`${c.name}-${i}`} className="relative shrink-0 w-32 h-10">
              <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes="128px"
                className="marquee-logo object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 text-center mt-16">
        <h3 className="font-serif italic text-xl sm:text-2xl tracking-tight">
          {content.becomePartner.headline}
        </h3>
        <p className="text-muted mt-3 text-sm">{content.becomePartner.body}</p>
        {/* TODO: replace mailto with a real partner inquiry form once one exists */}
        <a
          href="#"
          className="btn-primary-tactile font-label inline-block text-white font-semibold px-6 py-3 text-sm mt-6"
        >
          {content.becomePartner.cta}
        </a>
      </div>
    </section>
  );
}
