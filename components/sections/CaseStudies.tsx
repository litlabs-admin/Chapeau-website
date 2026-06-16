import { Reveal } from "@/components/motion/Reveal";
import { StickyShowcase } from "./StickyShowcase";

/**
 * Selected work — intro heading over the Framer "Everything in sync" sticky
 * showcase (constant card right, scrolling text left, image swaps per case).
 */
export function CaseStudies() {
  return (
    <section
      className="relative bg-white py-20 md:py-28"
      aria-label="Selected work"
    >
      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-[0.72rem] text-framer-mute">Selected work</p>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-framer-ink">
            Work shaped by the problem, measured by the outcome.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-framer-mute">
            Selected case studies
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <StickyShowcase kind="work" />
        </div>
      </div>
    </section>
  );
}
