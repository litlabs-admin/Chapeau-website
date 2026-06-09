import { offers, type Offer } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Offer boxes — the service range lives here, not on a separate services page.
 * Structure per the component rule: name · one-line · Best for · six visible
 * checklist items · Also covers tags · CTA. Teal hover/border state.
 */
export function OfferBoxes() {
  return (
    <section className="bg-navy py-20 text-white md:py-28" aria-label="How to work with Chapeau">
      <div className="shell">
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
  // Growth Retainer lifts to gold on hover; the other cards stay teal.
  const hoverBorder =
    offer.id === "growth-retainer"
      ? "hover:border-gold/50"
      : "hover:border-teal-400/50";

  return (
    <Reveal
      delay={delay}
      className={cn(
        "card-glow group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 ease-calm hover:bg-white/[0.05] sm:p-6 md:p-8",
        hoverBorder,
      )}
    >
      <h3 className="text-center font-condensed text-[1.3rem] font-semibold uppercase tracking-[0.01em] text-white md:text-[1.7rem]">
        {offer.name}
      </h3>

      {/* min-h keeps the "Best for" row below aligned across cards despite different lengths */}
      <p className="mt-3 min-h-[4.875rem] text-center leading-relaxed text-white/70">
        {offer.line}
      </p>

      <div className="mt-5 text-center">
        <p className="label text-[0.75rem] text-teal-400 md:text-[0.66rem]">Best for</p>
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
            <Check />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-white/10 pt-5 text-center">
        <p className="label text-[0.72rem] text-white/40 md:text-[0.62rem]">Also covers</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {offer.alsoCovers.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[0.75rem] text-white/50 md:text-[0.72rem]"
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

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-teal-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
