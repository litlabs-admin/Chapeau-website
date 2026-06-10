import { hero, valueStrip } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { Reveal } from "@/components/motion/Reveal";

export function HeroDictionary() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="shell">
        {/* Two equal panels, no gap, divided by a vertical line */}
        <div className="grid min-h-[480px] grid-cols-1 items-stretch md:grid-cols-2">
          {/* ── Left panel: copy (mirror of the current hero's left column) ── */}
          <Reveal className="flex flex-col justify-center border-b border-charcoal/15 py-12 pr-0 md:border-b-0 md:border-r md:py-16 md:pr-16">
            <Label>The Chapeau Collective</Label>

            <div className="mt-5">
              <RotatingHeadline lead={hero.lead} words={hero.words} />
            </div>

            <div className="mt-6 max-w-xl">
              <p className="text-lg leading-relaxed text-charcoal/90 md:text-xl">
                {hero.support[0]}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              {hero.ctas.map((c) => (
                <Button key={c.label} href={c.href} variant={c.variant}>
                  {c.label}
                </Button>
              ))}
            </div>
          </Reveal>

          {/* ── Right panel: dictionary entry ── */}
          <Reveal
            delay={0.12}
            className="flex flex-col justify-center py-12 pl-0 md:py-16 md:pl-16"
          >
            {/* Wordmark — same clamp as left headline */}
            <p className="font-condensed text-[clamp(3rem,6vw,5.5rem)] font-semibold uppercase leading-none tracking-tight text-charcoal">
              CHAPEAU
            </p>

            {/* Pronunciation + word class */}
            <p className="mt-3 font-condensed text-2xl italic tracking-wide md:text-3xl">
              <span className="text-teal-600">[sha-POH]</span>
              <span className="ml-3 font-light not-italic text-glass">
                noun
              </span>
            </p>

            {/* Gold rule */}
            <div className="my-6 h-px w-12 bg-gold" />

            {/* Definition */}
            <p className="max-w-sm font-sans text-lg italic leading-relaxed text-charcoal/70 md:text-xl">
              A tip of the hat.{" "}
              <span className="text-copper">Recognition and respect</span> for
              what you&apos;ve built.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Value strip */}
      <div className="border-y border-charcoal/10">
        <div className="shell flex flex-col items-center gap-4 py-6 text-center md:py-8">
          <p className="label text-[0.74rem] text-slate">{valueStrip.lead}</p>
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
