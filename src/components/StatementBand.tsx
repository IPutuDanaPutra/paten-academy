const PHRASE = "IDEA → PROMPT → MVP → LAUNCH";

export function StatementBand() {
  const items = Array.from({ length: 6 }, () => PHRASE);

  return (
    <div className="statement-band-gradient py-6 overflow-hidden" aria-hidden>
      <div className="marquee-track flex items-center gap-8 w-max">
        {[...items, ...items].map((phrase, i) => (
          <span
            key={i}
            className="font-serif italic text-3xl sm:text-5xl text-paper/90 tracking-tight whitespace-nowrap"
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
