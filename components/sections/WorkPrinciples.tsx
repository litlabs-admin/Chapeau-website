import { principles } from "@/lib/content/how-we-work";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Working principles — "Visible progress, properly managed." Mirrors the home
 * "Need more than advice?" pricing treatment: a light triangle-textured panel with
 * a centred eyebrow + heading + lead, then three cards where the middle one takes
 * the dark featured style and the outer two stay light.
 */
export function WorkPrinciples() {
  return (
    <section
      className="relative overflow-hidden bg-framer-panel py-20 md:py-28"
      aria-label={principles.eyebrow}
    >
      {/* Framer textures: triangle tiles + a top-down wash */}
      <div className="pattern-triangle pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[571px]"
        style={{
          background:
            "linear-gradient(180deg, #EDEDED 52%, rgba(143,205,255,0) 100%)",
        }}
      />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-[0.72rem] text-framer-mute">{principles.eyebrow}</p>
          <h2 className="mt-5 text-[clamp(2rem,4.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-framer-ink">
            {principles.heading}
          </h2>
          <div className="mt-5 space-y-4">
            <p className="text-[1.05rem] leading-relaxed text-framer-graphite md:text-[1.15rem]">
              {principles.lead.intro}
              <span className="mt-1 block font-medium text-[#FF2E8A]">
                {principles.lead.question}
              </span>
            </p>
            <p className="leading-relaxed text-framer-graphite">{principles.lead.answer}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {principles.items.map((item, i) => {
            const dark = i === 1;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={cn(
                  "flex flex-col rounded-2xl border p-8 text-center shadow-[0_4px_18px_rgba(0,0,0,0.12)] backdrop-blur-[5px]",
                  dark
                    ? "border-white/10 bg-framer-graphite text-white"
                    : "border-black/5 bg-framer-card text-framer-ink",
                )}
              >
                <span
                  className={cn(
                    "label text-[0.7rem]",
                    dark ? "text-[#FEFAF3]" : "text-[#FF2E8A]",
                  )}
                >
                  0{i + 1}
                </span>
                <h3
                  className={cn(
                    "mt-4 text-[1.2rem] font-semibold tracking-[-0.02em] md:text-[1.35rem]",
                    dark ? "text-white" : "text-framer-ink",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-3.5 leading-relaxed",
                    dark ? "text-white/70" : "text-framer-graphite",
                  )}
                >
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-framer-graphite md:mt-14">
            {principles.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
