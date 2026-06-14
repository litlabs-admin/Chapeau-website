import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/media/Pattern";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Final CTA — a controlled teal/charcoal gradient panel with the craft pattern.
 * Approved copy only: "Need more than advice? / Tell us what you want to talk
 * about." Reused across pages via the shared `site.finalCta` content.
 */
export function FinalCTA() {
  return (
    <section className="py-20 md:py-28" aria-label="Get in touch">
      <div className="shell">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-teal-dark px-7 py-16 md:px-16 md:py-24">
          <Pattern opacity={0.22} />
          <div className="foil-line absolute inset-x-0 top-0 h-px opacity-60" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              {site.finalCta.heading}
            </h2>
            <p className="mt-4 text-lg text-white/70 md:text-2xl">
              {site.finalCta.line}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              <Button href={site.finalCta.cta.href} variant="inverse">
                {site.finalCta.cta.label}
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="label text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline md:text-[0.8rem]"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
