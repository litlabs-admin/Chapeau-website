import { Label } from "@/components/ui/Label";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TypedHeading } from "@/components/motion/TypedHeading";

/**
 * Shared page intro — a calm editorial hero for interior pages. The eyebrow,
 * title and intro ease in on load with a light stagger (subtle, unhurried), so
 * every interior page opens with the same gentle entrance. Used by Contact and
 * Knowledge Room; the marketing pages use the full-screen `PageHero` instead.
 */
export function PageIntro({
  eyebrow,
  title,
  intro,
  highlight = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string | string[];
  highlight?: string[];
}) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];
  return (
    <section className="pt-16 md:pt-24">
      <Container>
        <Reveal trigger="mount" y={12} className="text-center">
          <Label>{eyebrow}</Label>
        </Reveal>
        <Reveal trigger="mount" delay={0.12} y={12}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-[clamp(2.6rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            <TypedHeading text={title} highlight={highlight} />
          </h1>
        </Reveal>
        {paragraphs.length > 0 && (
          <Reveal trigger="mount" delay={0.24} y={18}>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-lg leading-relaxed text-slate md:text-xl">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
