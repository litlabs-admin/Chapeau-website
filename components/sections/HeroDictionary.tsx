import { hero } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { ChapeauDefinition } from "@/components/motion/ChapeauDefinition";

/**
 * Hero — Framer "Echo" treatment.
 * Centred giant Barlow Condensed headline (with a rotating word on a lavender
 * highlight), a quiet subtitle and a two-button CTA pair, over a charcoal panel
 * holding a Chapeau-flavoured "ask" card. Full-section teal background with
 * fuchsia starburst + swoosh decorations. Entrance staggers on mount.
 * The capability value strip closes the section.
 */
export function HeroDictionary() {
  const [primary, secondary] = hero.ctas;

  return (
    <section className="pattern-dots relative -mt-20 overflow-hidden bg-[#08B8E8] pb-16 pt-20 md:-mt-24 md:pb-24 md:pt-24">
      <div className="shell relative pt-8 md:pt-12">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Reveal trigger="mount">
            <Label dot={false} className="text-white/60">
              The Chapeau Collective
            </Label>
          </Reveal>

          <Reveal trigger="mount" delay={0.04}>
            <StarburstIcon />
          </Reveal>

          <Reveal trigger="mount" delay={0.06} className="mt-4 w-full">
            <RotatingHeadline
              lead={hero.lead}
              words={hero.words}
              headlineColor="text-white"
              palette={[
                { bg: "#FF2E8A", text: "#FFFFFF" },
                { bg: "#E1C1FF", text: "#181A1A" },
                { bg: "#8FCDFF", text: "#181A1A" },
                { bg: "#FFD9A8", text: "#181A1A" },
              ]}
            />
          </Reveal>

          <Reveal trigger="mount" delay={0.14} className="w-full">
            <SwooshLine />
          </Reveal>

          <Reveal trigger="mount" delay={0.18} className="mt-6 max-w-[500px]">
            <p className="text-[clamp(1.05rem,3.6vw,1.2rem)] leading-[1.5] text-white/80">
              {hero.support[0]}
            </p>
          </Reveal>

          <Reveal
            trigger="mount"
            delay={0.26}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3"
          >
            <Button
              href={primary.href}
              variant="dark"
              className="bg-[#111111] border-[#111111] hover:bg-black"
            >
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="light">
                {secondary.label}
              </Button>
            )}
          </Reveal>
        </div>
      </div>

      {/* Charcoal inset panel — the CHAPEAU dictionary entry types out, centred */}
      <Reveal trigger="mount" delay={0.34} className="shell mt-16 md:mt-24">
        <div className="relative overflow-hidden rounded-lg bg-charcoal px-5 py-16 md:px-10 md:py-24">
          <ChapeauDefinition />
        </div>
      </Reveal>
    </section>
  );
}

function StarburstIcon() {
  // Upward "pop" burst — seven rays radiating from a centre with a small gap at
  // the core. Upper rays stand tall; the outer side rays angle slightly down so
  // the burst fans out like the brand-guide reference. Symmetric, round caps.
  return (
    <svg
      viewBox="0 0 60 30"
      width="76"
      height="38"
      fill="none"
      aria-hidden="true"
      className="mt-5"
    >
      {/* centre vertical */}
      <line x1="30"   y1="12"   x2="30"   y2="2"    stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      {/* ±35° */}
      <line x1="31.7" y1="12.5" x2="36.9" y2="5.2"  stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="28.3" y1="12.5" x2="23.1" y2="5.2"  stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      {/* ±70° */}
      <line x1="32.8" y1="14"   x2="40.3" y2="11.2" stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="27.2" y1="14"   x2="19.7" y2="11.2" stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      {/* ±105° (outer, angled slightly down) */}
      <line x1="32.9" y1="15.8" x2="39.7" y2="17.6" stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="27.1" y1="15.8" x2="20.3" y2="17.6" stroke="#E1B23C" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SwooshLine() {
  // Straight double underline under the highlighted word.
  return (
    <svg
      viewBox="0 0 340 16"
      className="mx-auto mt-2 w-full max-w-[340px]"
      fill="none"
      aria-hidden="true"
    >
      <line x1="10" y1="5"  x2="330" y2="5"  stroke="#E1B23C" strokeWidth="3.2" strokeLinecap="round" />
      <line x1="10" y1="12" x2="330" y2="12" stroke="#E1B23C" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
