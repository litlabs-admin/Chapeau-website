import type { Metadata } from "next";
import { contactHero, whatNext } from "@/lib/content/contact";
import { site } from "@/lib/content/site";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactHero.intro,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        intro={contactHero.intro}
      />

      <section className="pb-24 pt-12 md:pb-32 md:pt-16">
        <Container>
          {/* Steps — horizontal 3-column strip, centered */}
          <Reveal className="text-center">
            <Label>{whatNext.eyebrow}</Label>
            <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {whatNext.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex flex-col items-center gap-3 rounded-xl border border-charcoal/10 bg-charcoal/[0.02] p-6 text-center"
                >
                  <span className="label text-[0.9rem] text-teal-600">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed text-charcoal">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Foil-line separator */}
          <div className="foil-line my-12 h-px w-full" />

          {/* Form — centered */}
          <Reveal delay={0.1} className="mx-auto max-w-2xl">
            <ContactForm />
          </Reveal>

          {/* Email — centered below form */}
          <Reveal delay={0.15} className="mt-10 text-center">
            <p className="label text-[0.66rem] text-slate">Prefer email?</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-lg text-teal-700 underline-offset-4 transition-colors hover:underline"
            >
              {site.email}
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
