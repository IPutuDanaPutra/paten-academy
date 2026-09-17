import { Check } from "lucide-react";
import { content } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="max-w-2xl mx-auto px-6 py-24 text-center scroll-mt-28">
      <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight">Pricing</h2>
      <div className="card-tactile mt-8 p-10">
        <p className="font-serif italic text-4xl sm:text-5xl text-ink">
          Rp {content.pricing.amountIDR.toLocaleString("id-ID")}
        </p>
        <p className="font-label text-sm text-muted mt-2">{content.pricing.unit}</p>

        <div className="border-t border-ink/10 mt-8 pt-8">
          <ul className="space-y-4 text-left max-w-sm mx-auto">
            {content.pricing.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="text-primary" size={13} strokeWidth={3} />
                </span>
                <span className="font-label text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://s.id/Registration-Paten-Academy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-tactile font-label inline-block text-white font-semibold px-8 py-3.5 text-sm mt-8"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
