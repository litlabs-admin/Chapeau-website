import { workJoins } from "@/lib/content/collective";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * How the work joins together — four moving parts (Direction · Marketing · AI and
 * systems · Delivery) as a numbered grid, reinforcing the "one joined-up view".
 */
export function WorkJoins() {
  return (
    <section className="py-20 md:py-28" aria-label={workJoins.eyebrow}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>{workJoins.eyebrow}</Label>
          <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {workJoins.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/5 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {workJoins.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 0.06}
              className="flex flex-col bg-white p-7 md:p-8"
            >
              <span className="font-condensed text-[1.1rem] font-semibold text-teal-600">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
