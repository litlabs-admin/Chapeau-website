import { workJoins } from "@/lib/content/collective";
import { Reveal } from "@/components/motion/Reveal";
import { WorkJoinCard } from "@/components/sections/WorkJoinCard";

/**
 * How the work joins together — four moving parts (Direction · Marketing · AI and
 * systems · Delivery) as a numbered grid, reinforcing the "one joined-up view".
 */
export function WorkJoins() {
  return (
    <section className="py-20 md:py-28" aria-label={workJoins.eyebrow}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-[0.72rem] text-framer-mute">{workJoins.eyebrow}</p>
          <h2 className="mt-5 text-[clamp(2rem,4.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-framer-ink">
            {workJoins.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {workJoins.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06} className="h-full">
              <WorkJoinCard index={i} title={item.title} body={item.body} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
