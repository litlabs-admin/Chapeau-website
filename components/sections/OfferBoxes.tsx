import { offers, type Offer } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * "Need more than advice?" — Framer "Pricing" treatment.
 * A light panel with a faint triangle texture and a centred two-line heading,
 * over three engagement cards. The middle "Growth Retainer" takes the dark
 * featured style (Framer's Enterprise card); the outer two stay light.
 */

type Tone = {
  card: string;
  name: string;
  line: string;
  bestForLabel: string;
  bestFor: string;
  divider: string;
  includeLabel: string;
  bullet: string;
  feature: string;
  alsoLabel: string;
  tag: string;
  button: "dark" | "light";
};

const lightTone: Tone = {
  card: "bg-framer-card border-black/5 text-framer-ink",
  name: "text-framer-ink",
  line: "text-framer-mute",
  bestForLabel: "text-framer-mute",
  bestFor: "text-framer-graphite",
  divider: "border-black/10",
  includeLabel: "text-framer-mute",
  bullet: "bg-framer-feat",
  feature: "text-framer-feat",
  alsoLabel: "text-framer-mute",
  tag: "border-black/10 text-framer-graphite",
  button: "dark",
};

const darkTone: Tone = {
  card: "bg-framer-graphite border-white/10 text-white",
  name: "text-white",
  line: "text-white/70",
  bestForLabel: "text-white/55",
  bestFor: "text-white/80",
  divider: "border-white/15",
  includeLabel: "text-white/55",
  bullet: "bg-[#FEFAF3]",
  feature: "text-[#FEFAF3]",
  alsoLabel: "text-white/55",
  tag: "border-white/20 text-white/80",
  button: "light",
};

export function OfferBoxes() {
  return (
    <section
      className="relative overflow-hidden bg-framer-panel py-20 md:py-28"
      aria-label="How to work with Chapeau"
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
          <p className="label text-[0.72rem] text-framer-mute">Work with Chapeau</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-framer-ink">
            Need more than{" "}
            <span className="rounded-[0.1em] bg-[#FF2E8A] px-[0.18em] text-white">
              advice?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-framer-mute">
            Pick your starting point and talk to us.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:mt-16 lg:grid-cols-3 lg:[grid-template-rows:repeat(6,auto)]">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, delay }: { offer: Offer; delay: number }) {
  const tone = offer.id === "growth-retainer" ? darkTone : lightTone;

  return (
    <Reveal
      delay={delay}
      className={cn(
        "grid grid-rows-[repeat(6,auto)] gap-y-5 rounded-2xl border p-8 text-center shadow-[0_4px_18px_rgba(0,0,0,0.12)] backdrop-blur-[5px] lg:row-span-6 lg:grid-rows-subgrid lg:gap-y-6",
        tone.card,
      )}
    >
      {/* Row 1 — name */}
      <h3 className={cn("text-[1.4rem] font-semibold", tone.name)}>
        {offer.name}
      </h3>

      {/* Row 2 — description */}
      <p className={cn("leading-relaxed", tone.line)}>{offer.line}</p>

      {/* Row 3 — best for */}
      <div>
        <p className={cn("label text-[0.62rem]", tone.bestForLabel)}>Best for</p>
        <p className={cn("mt-2 text-[0.95rem] leading-relaxed", tone.bestFor)}>
          {offer.bestFor}
        </p>
      </div>

      {/* Row 4 — CTA */}
      <div>
        <Button
          href={offer.cta.href}
          variant={tone.button}
          withArrow={false}
          glowBorder
          className="w-full"
        >
          {offer.cta.label}
        </Button>
      </div>

      {/* Row 5 — what's included */}
      <div className={cn("border-t pt-6", tone.divider)}>
        <p className={cn("label text-[0.62rem]", tone.includeLabel)}>
          What&apos;s included
        </p>
        <ul className="mt-4 space-y-3">
          {offer.checklist.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-start justify-center gap-3 text-left text-[0.95rem] leading-snug",
                tone.feature,
              )}
            >
              <span
                className={cn(
                  "mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full",
                  tone.bullet,
                )}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Row 6 — also covers */}
      <div className={cn("border-t pt-6", tone.divider)}>
        <p className={cn("label text-[0.6rem]", tone.alsoLabel)}>Also covers</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {offer.alsoCovers.map((t) => (
            <span
              key={t}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[0.72rem]",
                tone.tag,
              )}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
