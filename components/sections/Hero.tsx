import { hero, valueStrip } from "@/lib/content/home";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { MediaPanel } from "@/components/media/MediaPanel";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Hero — copy left, media right on desktop; copy first, media second on mobile
 * (never reversed). The media panel stretches to the copy column's height so the
 * whole hero + value strip sit close to one viewport, with no excess white space.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12">
      <div className="shell grid items-stretch gap-9 pb-9 md:grid-cols-12 md:gap-12 md:pb-12">
        {/* Copy */}
        <Reveal className="flex flex-col items-center justify-center text-center md:col-span-6 md:items-start md:text-left">
          <Label>The Chapeau Collective</Label>

          <div className="mt-5">
            <RotatingHeadline pairs={hero.rotation} />
          </div>

          <div className="mx-auto mt-6 max-w-xl space-y-3.5 md:mx-0">
            <p className="text-lg leading-relaxed text-charcoal/90 md:text-xl">
              {hero.support[0]}
            </p>
            <p className="leading-relaxed text-slate">
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

        {/* Media — matches the copy height on desktop */}
        <Reveal delay={0.1} className="md:col-span-6">
          <MediaPanel
            src={hero.image}
            alt={hero.imageAlt}
            overlay="teal"
            priority
            className="aspect-[5/6] w-full sm:aspect-[16/11] md:aspect-auto md:h-full md:min-h-[420px]"
          >
            <div className="flex h-full flex-col justify-end p-7 md:p-9">
              <p className="label text-[0.72rem] text-white/70">
                Senior direction · Practical delivery
              </p>
              <p className="mt-2 max-w-[15rem] text-[1.35rem] font-medium leading-snug text-white">
                One joined-up view of growth.
              </p>
            </div>
          </MediaPanel>
        </Reveal>
      </div>

      {/* Value strip */}
      <div className="border-y border-charcoal/10">
        <div className="shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8 md:py-6">
          <p className="label shrink-0 text-[0.74rem] text-slate">
            {valueStrip.lead}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {valueStrip.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06} y={8}>
                <span className="flex items-center gap-6">
                  {i > 0 && (
                    <span
                      className="hidden h-1 w-1 rounded-full bg-gold md:block"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-[0.95rem] font-medium text-charcoal">
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
