import { content } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CurriculumTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-ink/10 text-muted">
            <th className="py-2 pr-4 font-label font-medium">Week</th>
            <th className="py-2 pr-4 font-label font-medium">Focus</th>
            <th className="py-2 pr-4 font-label font-medium">Format</th>
            <th className="py-2 font-label font-medium">Deliverable</th>
          </tr>
        </thead>
        <tbody>
          {content.curriculum.map((row) => (
            <tr key={row.week} className="border-b border-ink/5 last:border-0 align-top">
              <td className="py-2.5 pr-4 font-label text-ink">{row.week}</td>
              <td className="py-2.5 pr-4 text-ink">{row.focus}</td>
              <td className="py-2.5 pr-4 text-muted">{row.format}</td>
              <td className="py-2.5 text-muted">{row.deliverable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative max-w-3xl mx-auto px-6 py-24 scroll-mt-28">
      <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight text-center">
        Frequently Asked Questions
      </h2>

      <div className="card-tactile mt-14 px-6">
        <Accordion type="single" collapsible>
          {content.faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                <p>{item.a}</p>
                {item.q === "What happens week by week?" && <CurriculumTable />}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
