import type { Metadata } from "next";
import { contactHero } from "@/lib/content/contact";
import { site } from "@/lib/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { StepCards } from "@/components/sections/StepCards";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactHero.intro,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        intro={contactHero.intro}
        highlight={["advice"]}
        cta={{ label: "Send a message", href: "#contact-form" }}
      />

      <section id="contact-form" className="pb-24 pt-12 md:pb-32 md:pt-16">
        <Container>
          <StepCards />

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
