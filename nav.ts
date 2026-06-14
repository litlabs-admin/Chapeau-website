import { whyCollective } from "@/lib/content/collective";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Why the collective exists — an editorial narrative. The lead sits left; the
 * "one isolated thing" examples read as a clean list on the right, closing on the
 * signature line set as a confident statement.
 */
export function WhyCollective() {
  return (
    <section className="py-20 md:py-28" aria-label={whyCollective.eyebrow}>
      <div className="shell flex flex-col gap-10 md:gap-12">
        <Reveal className="flex flex-col items-center text-center">
          <Label>{whyCollective.eyebrow}</Label>
          <div className="mt-5 max-w-2xl space-y-4">
            {whyCollective.lead.map((p) => (
              <p
                key={p}
                className="text-[1.15rem] leading-relaxed text-charcoal md:text-[1.3rem]"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl bg-charcoal p-8 text-white md:p-10">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {whyCollective.examples.map((ex) => (
              <li
                key={ex}
                className="flex items-start gap-4 py-4 text-white/70"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{ex}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 leading-relaxed text-white/65">{whyCollective.close}</p>
          <p className="mt-6 font-condensed text-[1.1rem] font-semibold uppercase leading-snug tracking-[0.01em] text-teal-400 md:text-[1.25rem]">
            {whyCollective.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
