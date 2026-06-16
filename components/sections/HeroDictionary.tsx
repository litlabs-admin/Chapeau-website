import { hero, valueStrip } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Hero — Framer "Echo" treatment.
 * Centred giant Barlow Condensed headline (with a rotating word on a lavender
 * highlight), a quiet subtitle and a single dark CTA, over a pastel sky panel
 * holding a Chapeau-flavoured "ask" card. Entrance staggers headline → subtitle
 * → CTA → panel on mount. The capability value strip closes the section.
 */
export function HeroDictionary() {
  const [primary, secondary] = hero.ctas;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="shell relative pt-16 md:pt-24">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Reveal trigger="mount">
            <Label dot={false} className="text-framer-mute">
              The Chapeau Collective
            </Label>
          </Reveal>

          <Reveal trigger="mount" delay={0.06} className="mt-6 w-full">
            <RotatingHeadline lead={hero.lead} words={hero.words} />
          </Reveal>

          <Reveal trigger="mount" delay={0.16} className="mt-7 max-w-[500px]">
            <p className="text-[1.125rem] leading-[1.5] text-framer-mute">
              {hero.support[0]}
            </p>
          </Reveal>

          <Reveal
            trigger="mount"
            delay={0.24}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <Button href={primary.href} variant="dark">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </Reveal>
        </div>
      </div>

      {/* Pastel sky panel with the Chapeau "ask" card */}
      <Reveal trigger="mount" delay={0.32} className="shell mt-16 md:mt-24">
        <div className="pattern-dots relative overflow-hidden rounded-lg bg-framer-sky px-5 py-16 md:px-10 md:py-24">
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
