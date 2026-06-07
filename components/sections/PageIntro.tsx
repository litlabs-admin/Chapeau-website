import { Label } from "@/components/ui/Label";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TypedHeading } from "@/components/motion/TypedHeading";

/**
 * Shared page intro — a calm editorial hero for interior pages. The eyebrow,
 * title and intro ease in on load with a light stagger (subtle, unhurried), so
 * every interior page opens with the same gentle entrance. Used now; later phases
 * build out each page's full body beneath it.
 */
export function PageIntro({
  eyebrow,
  title,
  intro,
  highlight = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  highlight?: string[];
}) {
  return (
    <section className="pt-16 md:pt-24">
      <Container>
        <Reveal trigger="mount" y={12} className="text-center">
          <Label>{eyebrow}</Label>
        </Reveal>
        <Reveal trigger="mount" delay={0.12} y={12}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-[clamp(2.4rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            <TypedHeading text={title} highlight={highlight} />
          </h1>
        </Reveal>
        {intro && (
          <Reveal trigger="mount" delay={0.24} y={18}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate md:text-xl">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
