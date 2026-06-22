import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/media/Pattern";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Final CTA — a dark Framer "Echo" panel with a subtle dot texture, matching the
 * home system. The last word of the heading carries a hot-pink highlight (echoing
 * the home "Need more than advice?" pricing heading). Approved copy only, reused
 * across pages via the shared `site.finalCta` content.
 */
export function FinalCTA() {
  // Highlight the final word of the heading without hardcoding the copy.
  const words = site.finalCta.heading.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const last = words[words.length - 1];

  return (
    <section className="py-20 md:py-28" aria-label="Get in touch">
      <div className="shell">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-framer-ink px-7 py-16 md:px-16 md:py-24">
          <Pattern opacity={0.12} />
          <div className="foil-line absolute inset-x-0 top-0 h-px opacity-60" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2.3rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              {lead}{" "}
              <span className="rounded-[0.1em] bg-[#FF2E8A] px-[0.14em] text-white">
                {last}
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/70 md:text-2xl">
              {site.finalCta.line}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              <Button href={site.finalCta.cta.href} variant="light">
                {site.finalCta.cta.label}
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="label text-[0.8rem] text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline md:text-sm"
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
