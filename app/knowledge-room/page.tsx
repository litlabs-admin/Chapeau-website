import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Knowledge Room — hidden at launch (absent from nav/footer) and `noindex`. This
 * is the holding/framework page; the real content is built later.
 */
export const metadata: Metadata = {
  title: "Knowledge Room",
  robots: { index: false, follow: false },
};

const futureSections = [
  "Frameworks",
  "Prompts",
  "Playbooks",
  "Workshop methods",
  "Lead magnets",
  "Product range, including Tarsha AI",
];

export default function KnowledgeRoomPage() {
  return (
    <>
      <PageIntro
        eyebrow="Knowledge Room"
        title="Tools for clearer thinking and better execution."
        intro="Frameworks, prompts and practical tools for strategy, marketing, AI and growth work."
      />

      <section className="pb-28 pt-12 md:pt-16">
        <Container>
          <Reveal>
            <Label>In development</Label>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/5 sm:grid-cols-2 lg:grid-cols-3">
            {futureSections.map((s, i) => (
              <Reveal
                key={s}
                delay={(i % 3) * 0.06}
                className="flex items-center gap-4 bg-white p-7"
              >
                <span className="font-condensed text-[1.1rem] font-semibold text-teal-600">
                  0{i + 1}
                </span>
                <span className="font-medium text-charcoal">{s}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-slate">
            This room is being built. In the meantime, if there is a tool or
            framework you want, tell us what you want to talk about.
          </p>
        </Container>
      </section>
    </>
  );
}
