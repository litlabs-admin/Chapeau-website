import { hero, valueStrip } from "@/lib/content/home";

import { RotatingHeadline } from "@/components/motion/RotatingHeadline";

import { MediaPanel } from "@/components/media/MediaPanel";

import { Button } from "@/components/ui/Button";

import { Label } from "@/components/ui/Label";

import { Reveal } from "@/components/motion/Reveal";

/**
 * Hero.
 * Teal background is forced with inline style to bypass Tailwind.
 * Value strip is forced to true white.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-8 md:pt-12"
      style={{ backgroundColor: "#00FFFF" }}
    >
      <div
        className="shell grid items-stretch gap-9 pb-9 md:grid-cols-12 md:gap-12 md:pb-12"
        style={{ backgroundColor: "#00FFFF" }}
      >
        {/* Copy */}
        <Reveal className="flex flex-col items-center justify-center text-center md:col-span-6 md:items-start md:text-left">
          <Label>The Chapeau Collective</Label>

          <div className="mt-5">
            <RotatingHeadline lead={hero.lead} words={hero.words} />
          </div>

          <div className="mx-auto mt-6 max-w-xl space-y-3.5 md:mx-0">
            <p className="text-lg leading-relaxed text-charcoal/90 md:text-xl">
              {hero.support[0]}
            </p>

            <p className="leading-relaxed text-charcoal/80">
              {hero.support[1]} {hero.support[2]}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 md:justify-start">
            {hero.ctas.map((c) => (
              <Button key={c.label} href={c.href} variant={c.variant}>
                {c.label}
              </Button>
            ))}
          </div>
        </Reveal>

        {/* Media */}
        <Reveal delay={0.1} className="md:col-span-6">
          <MediaPanel
            src={hero.image}
            alt={hero.imageAlt}
            overlay="teal"
            priority
            className="aspect-[5/6] w-full sm:aspect-[16/11] md:aspect-auto md:h-full md:min-h-[420px]"
          >
            <div className="flex h-full flex-col justify-end p-7 md:p-9">
              <p className="label text-xs text-[#FFFFFF]/70 md:text-[0.72rem]">
                Senior direction · Practical delivery
              </p>

              <p className="mt-2 max-w-[15rem] text-base font-medium leading-snug text-[#FFFFFF] md:text-[1.35rem]">
                One joined-up view of growth.
              </p>
            </div>
          </MediaPanel>
        </Reveal>
      </div>

      {/* Value strip */}
      <div
        className="border-y border-charcoal/10"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="shell flex flex-col items-center gap-4 py-6 text-center md:py-8">
          <p className="label text-[0.74rem] text-slate">
            {valueStrip.lead}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {valueStrip.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06} y={8}>
                <span className="flex items-center gap-6">
                  {i > 0 && (
                    <span
                      className="h-1 w-1 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                  )}

                  <span className="text-sm font-medium text-charcoal md:text-[0.95rem]">
                    {item}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
