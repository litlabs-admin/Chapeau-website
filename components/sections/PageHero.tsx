import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TypedHeading } from "@/components/motion/TypedHeading";

/**
 * Full-screen page hero — the Framer "Echo" template treatment for marketing
 * pages (How We Work, The Collective). A white, full-viewport panel with a giant
 * black Barlow-Condensed headline (the key word carried on a hot-pink highlight,
 * like the home hero), a quiet grey subtitle and a dark CTA button. The eyebrow,
 * headline, subtitle and CTA ease in on mount with a light stagger.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  highlight = [],
  cta = site.primaryCta,
}: {
  eyebrow: string;
  title: string;
  intro?: string | string[];
  highlight?: string[];
  cta?: { label: string; href: string };
}) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <section className="relative -mt-16 flex min-h-screen items-center bg-white pt-16 md:-mt-[72px] md:pt-[72px]">
      <div className="shell w-full">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center py-16 text-center md:py-24">
          <Reveal trigger="mount">
            <p className="label text-[0.72rem] text-framer-mute">{eyebrow}</p>
          </Reveal>

          <Reveal trigger="mount" delay={0.08} className="mt-6 w-full">
            <h1 className="font-display text-[clamp(3.1rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-framer-ink [text-wrap:balance]">
              <TypedHeading
                text={title}
                highlight={highlight}
                highlightClassName="rounded-[0.08em] bg-[#FF2E8A] px-[0.1em] text-white [box-decoration-break:clone]"
              />
            </h1>
          </Reveal>

          {paragraphs.length > 0 && (
            <Reveal trigger="mount" delay={0.18} className="mt-5 max-w-2xl md:mt-7">
              <div className="space-y-4 text-[1.1rem] leading-relaxed text-framer-mute [text-wrap:pretty] md:text-[1.2rem]">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal trigger="mount" delay={0.26} className="mt-9">
            <Button href={cta.href} variant="dark">
              {cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
