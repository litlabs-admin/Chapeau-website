import { principles } from "@/lib/content/how-we-work";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Working principles — "Visible progress, properly managed." A calm white
 * editorial with the lead question set in gold, three navy cards carrying the
 * principles, and a closing line. Set on white so it breathes after the dark
 * post-sale section above.
 */
export function WorkPrinciples() {
  return (
    <section className="bg-white py-20 text-charcoal md:py-28" aria-label={principles.eyebrow}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>{principles.eyebrow}</Label>
          <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {principles.heading}
          </h2>
          <div className="mt-5 space-y-4">
            <p className="text-[1.05rem] leading-relaxed text-slate md:text-[1.15rem]">
              {principles.lead.intro}{" "}
              <span className="font-medium text-gold">
                {principles.lead.question}
              </span>
            </p>
            <p className="leading-relaxed text-slate">{principles.lead.answer}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-16 md:gap-5 md:grid-cols-3">
          {principles.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="card-glow relative flex flex-col rounded-2xl border border-white/[0.08] bg-navy p-5 text-white transition-all duration-300 ease-calm hover:border-teal-400/50 hover:bg-white/[0.05] sm:p-6 md:p-9"
            >
              <span className="block text-center font-condensed text-[1.1rem] font-semibold text-teal-400">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-center text-[1.2rem] font-semibold tracking-[-0.02em] text-white md:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="mt-3.5 text-center leading-relaxed text-white/65">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-slate md:mt-14">
            {principles.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
