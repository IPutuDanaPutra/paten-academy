import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ink text-white/50 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative shrink-0" style={{ width: 140, height: 28 }}>
          <Image
            src="/logo/paten-academy-full.png"
            alt="Paten Academy"
            fill
            sizes="140px"
            className="object-contain object-left"
          />
        </div>
        <a href="#" className="font-label text-sm hover:text-white">
          Contact
        </a>
      </div>
    </footer>
  );
}
