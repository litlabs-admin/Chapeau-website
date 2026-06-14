import { hero, valueStrip } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function HeroDictionary() {
  return (
    <section className="relative overflow-hidden bg-teal-500">
      <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-fuchsia/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-8 h-72 w-72 rounded-full border border-charcoal/20" />
      <div className="pointer-events-none absolute right-[18%] top-20 h-3 w-3 rounded-full bg-fuchsia" />
      <div className="pointer-events-none absolute left-[42%] bottom-16 h-2 w-2 rounded-full bg-charcoal" />

      <div className="shell relative">
        <div className="grid min-h-[480px] grid-cols-1 items-stretch md:grid-cols-2">
          <Reveal className="flex flex-col justify-center border-b border-charcoal/25 py-12 pr-0 md:border-b-0 md:border-r md:py-16 md:pr-16">
            <Label className="text-charcoal/75">The Chapeau Collective</Label>

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
                <Button
                  key={c.label}
                  href={c.href}
                  variant={c.variant}
                  className={cn(
                    c.variant === "primary"
                      ? "border-fuchsia bg-fuchsia text-white hover:border-charcoal hover:bg-charcoal hover:text-teal-500"
                      : "border-fuchsia/70 text-fuchsia hover:border-charcoal hover:text-charcoal",
                  )}
                >
                  {c.label}
                </Button>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="flex flex-col justify-center py-12 pl-0 md:py-16 md:pl-16"
          >
            <p className="font-condensed text-[clamp(3rem,6vw,5.5rem)] font-semibold uppercase leading-none tracking-tight text-charcoal">
              CHAPEAU
            </p>

            <p className="mt-3 font-condensed text-2xl italic tracking-wide md:text-3xl">
              <span className="text-fuchsia">[sha-POH]</span>
              <span className="ml-3 font-light not-italic text-charcoal/55">
                noun
              </span>
            </p>

            <div className="my-6 h-1 w-16 rounded-full bg-fuchsia" />

            <p className="max-w-sm font-sans text-lg italic leading-relaxed text-charcoal/75 md:text-xl">
              A tip of the hat.{" "}
              <span className="font-medium text-charcoal">
                Recognition and respect
              </span>{" "}
              for what you&apos;ve built.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative border-y border-charcoal/10 bg-white">
        <div className="pointer-events-none absolute left-[8%] top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-fuchsia/20" />
        <div className="pointer-events-none absolute right-[10%] top-1/2 h-2 w-24 -translate-y-1/2 rounded-full bg-teal-500/40" />

        <div className="shell relative flex flex-col items-center gap-4 py-6 text-center md:py-8">
          <p className="label text-[0.74rem] text-slate">{valueStrip.lead}</p>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {valueStrip.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06} y={8}>
                <span className="flex items-center gap-7">
                  {i > 0 && (
                    <span
                      className="h-2 w-2 rounded-full bg-fuchsia"
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
