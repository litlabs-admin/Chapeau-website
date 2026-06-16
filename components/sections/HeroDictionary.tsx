import { hero, valueStrip } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { Reveal } from "@/components/motion/Reveal";

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
    <section className="pattern-dots relative overflow-hidden bg-[#06B6D4]">
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
            <RotatingHeadline lead={hero.lead} words={hero.words} headlineColor="text-white" />
          </Reveal>

          <Reveal trigger="mount" delay={0.14} className="w-full">
            <SwooshLine />
          </Reveal>

          <Reveal trigger="mount" delay={0.18} className="mt-6 max-w-[500px]">
            <p className="text-[1.125rem] leading-[1.5] text-white/80">
              {hero.support[0]}
            </p>
          </Reveal>

          <Reveal
            trigger="mount"
            delay={0.26}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3"
          >
            <Button href={primary.href} variant="dark">
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

      {/* Charcoal inset panel with the Chapeau "ask" card */}
      <Reveal trigger="mount" delay={0.34} className="shell mt-16 md:mt-24">
        <div className="relative overflow-hidden rounded-lg bg-charcoal px-5 py-16 md:px-10 md:py-24">
          <AskCard />
        </div>
      </Reveal>

      {/* Capability value strip */}
      <div className="relative mt-16 border-y border-black/[0.06] bg-white md:mt-24">
        <div className="shell flex flex-col items-center gap-4 py-6 text-center md:py-8">
          <p className="label text-[0.72rem] text-framer-mute">{valueStrip.lead}</p>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {valueStrip.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06} y={8}>
                <span className="flex items-center gap-7">
                  {i > 0 && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-framer-ink/40"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-sm font-medium text-framer-graphite md:text-[0.95rem]">
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

/**
 * Chapeau-flavoured "ask" composer — mirrors Framer's prompt card (search icon,
 * prompt line, "Add files", send button) but speaks to what Chapeau does.
 */
function AskCard() {
  return (
    <div className="mx-auto w-full max-w-[640px] rounded-[18px] bg-white p-5 shadow-[0_2.53px_80px_rgba(0,0,0,0.08)] md:p-6">
      <div className="flex items-center gap-3">
        <SearchIcon />
        <p className="text-[1.05rem] text-framer-graphite md:text-[1.15rem]">
          Draft a GTM plan for our launch
          <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-framer-ink motion-safe:animate-[caret_1.05s_steps(1)_infinite]" />
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[0.95rem] text-framer-mute">
          <PlusIcon />
          Add files
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-framer-ink text-white">
          <ArrowUpIcon />
        </span>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-framer-mute"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarburstIcon() {
  // Upward sunburst matching the Echo reference.
  // Center junction at (30,14) — bottom area. Three short rays radiate toward
  // the top-left, top, and top-right. Horizontal dashes anchor the center.
  return (
    <svg
      viewBox="0 0 60 18"
      width="72"
      height="22"
      fill="none"
      aria-hidden="true"
      className="mt-5"
      style={{ transform: "scaleY(-1)" }}
    >
      {/* vertical ray — up */}
      <line x1="30" y1="14" x2="30" y2="2"  stroke="#F5C517" strokeWidth="2.5" strokeLinecap="round" />
      {/* left diagonal — up-left */}
      <line x1="30" y1="14" x2="17" y2="4"  stroke="#F5C517" strokeWidth="2.5" strokeLinecap="round" />
      {/* right diagonal — up-right */}
      <line x1="30" y1="14" x2="43" y2="4"  stroke="#F5C517" strokeWidth="2.5" strokeLinecap="round" />
      {/* left horizontal dash */}
      <line x1="2"  y1="14" x2="24" y2="14" stroke="#F5C517" strokeWidth="2.5" strokeLinecap="round" />
      {/* right horizontal dash */}
      <line x1="36" y1="14" x2="58" y2="14" stroke="#F5C517" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SwooshLine() {
  return (
    <svg
      viewBox="0 0 640 24"
      className="mx-auto mt-2 w-full max-w-[640px]"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 6 Q 320 2, 632 6"   stroke="#F5C517" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 16 Q 320 12, 632 16" stroke="#F5C517" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
