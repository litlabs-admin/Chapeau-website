import { offers, type Offer } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const cardStyles: Record<
  string,
  {
    card: string;
    glow: string;
    bestFor: string;
    check: string;
    alsoLabel: string;
    tag: string;
  }
> = {
  "build-sprint": {
    card:
      "border-teal-500/50 bg-white/[0.035] hover:border-teal-500/80 [--card-glow-bg:#0B151A]",
    glow: "card-glow-teal",
    bestFor: "text-teal-500",
    check: "text-teal-500",
    alsoLabel: "text-fuchsia",
    tag: "border-fuchsia/40 text-fuchsia",
  },
  "growth-retainer": {
    card:
      "border-fuchsia/50 bg-white/[0.055] hover:border-fuchsia/90 [--card-glow-bg:#10171D]",
    glow: "card-glow-fuchsia",
    bestFor: "text-fuchsia",
    check: "text-fuchsia",
    alsoLabel: "text-teal-500",
    tag: "border-teal-500/40 text-teal-500",
  },
  "ai-build-lab": {
    card:
      "border-teal-400/50 bg-white/[0.025] hover:border-fuchsia/90 [--card-glow-bg:#071115]",
    glow: "card-glow-fuchsia",
    bestFor: "text-teal-500",
    check: "text-teal-500",
    alsoLabel: "text-fuchsia",
    tag: "border-fuchsia/40 text-fuchsia",
  },
};

export function OfferBoxes() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28"
      aria-label="How to work with Chapeau"
    >
      <div className="pointer-events-none absolute left-[8%] top-16 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-16 h-64 w-64 rounded-full bg-fuchsia/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] bottom-10 h-2 w-28 rounded-full bg-fuchsia" />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
            Need more than advice?
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/70 md:text-2xl">
            Pick your starting point and talk to us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-16 md:gap-6 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, delay }: { offer: Offer; delay: number }) {
  const style = cardStyles[offer.id] ?? cardStyles["build-sprint"];

  return (
    <Reveal
      delay={delay}
      className={cn(
        "card-glow group relative flex h-full flex-col rounded-2xl border p-5 transition-all duration-300 ease-calm hover:bg-white/[0.06] sm:p-6 md:p-8",
        style.card,
        style.glow,
      )}
    >
      <h3 className="text-center font-condensed text-[1.3rem] font-semibold uppercase tracking-[0.01em] text-white md:text-[1.7rem]">
        {offer.name}
      </h3>

      <p className="mt-3 min-h-[4.875rem] text-center leading-relaxed text-white/70">
        {offer.line}
      </p>

      <div className="mt-5 text-center">
        <p className={cn("label text-[0.75rem] md:text-[0.66rem]", style.bestFor)}>
          Best for
        </p>
        <p className="mt-2 min-h-[6.5rem] text-sm leading-relaxed text-white/55 md:text-[0.92rem]">
          {offer.bestFor}
        </p>
      </div>

      <ul className="mt-5 space-y-2.5">
        {offer.checklist.map((item) => (
          <li
            key={item}
            className="flex items-start justify-center gap-3 text-[0.95rem] text-white/85"
          >
            <Check className={style.check} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-white/10 pt-5 text-center">
        <p className={cn("label text-[0.72rem] md:text-[0.62rem]", style.alsoLabel)}>
          Also covers
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {offer.alsoCovers.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[0.75rem] md:text-[0.72rem]",
                style.tag,
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-7">
        <Button href={offer.cta.href} variant="inverse" className="w-full">
          {offer.cta.label}
        </Button>
      </div>
    </Reveal>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("mt-0.5 h-4 w-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
