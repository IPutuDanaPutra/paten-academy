import { content } from "@/lib/content";

function Row({ text }: { text: string }) {
  return (
    <div className="py-10 border-b border-ink/10 last:border-0">
      <p className="font-serif italic text-2xl sm:text-3xl tracking-tight leading-snug max-w-3xl">
        {text}
      </p>
    </div>
  );
}

export function Problem() {
  const [large, ...small] = content.problem.why;

  return (
    <section className="relative max-w-4xl mx-auto px-6 py-24">
      <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight text-center">
        Why Paten Academy
      </h2>

      <div className="mt-14">
        {content.problem.points.map((p) => (
          <Row key={p.text} text={p.text} />
        ))}
      </div>

      <p className="mt-16 font-label text-xs uppercase tracking-widest text-muted">
        How we&apos;re different
      </p>
      <div className="grid md:grid-cols-5 gap-6 mt-4">
        <div className="card-tactile md:col-span-3 p-8 flex items-center">
          <p className="font-serif italic text-2xl sm:text-3xl leading-snug">{large.text}</p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-6">
          {small.map((p) => (
            <div key={p.text} className="card-tactile p-6 flex-1 flex items-center">
              <p className="font-serif italic text-lg leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
