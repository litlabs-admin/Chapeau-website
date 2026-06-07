import { principles } from "@/lib/content/how-we-work";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Working principles — the three things it should feel like to work with Chapeau.
 * A calm three-column editorial with a teal index detail (the glint), set on the
 * deep navy field for separation.
 */
export function WorkPrinciples() {
  return (
    <section className="bg-navy py-20 text-white md:py-28" aria-label={principles.eyebrow}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label tone="light">{principles.eyebrow}</Label>
          <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            {principles.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:mt-16 md:grid-cols-3">
          {principles.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="flex flex-col bg-navy p-7 md:p-9"
            >
              <span className="font-condensed text-[1.1rem] font-semibold text-teal-400">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-3.5 leading-relaxed text-white/65">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
