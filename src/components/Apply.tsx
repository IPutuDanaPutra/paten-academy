export function Apply() {
  return (
    <section id="apply" className="relative overflow-hidden bg-primary py-24 scroll-mt-28">
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[26rem] h-[26rem] rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
        <h2 className="font-serif italic text-3xl sm:text-5xl tracking-tight">
          Ready to build your MVP?
        </h2>
        <p className="mt-5 text-lg text-white/80">
          Limited cohort spots — selected solo founders, formed into small
          accountability groups.
        </p>
        {/* TODO: connect to real application form URL */}
        <a
          href="#"
          className="btn-tactile font-label mt-10 inline-block bg-accent text-ink font-bold px-10 py-4 rounded-full text-lg hover:brightness-95 transition-[filter]"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
