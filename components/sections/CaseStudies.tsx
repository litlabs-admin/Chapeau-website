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
          <p className="label text-[0.72rem] text-framer-mute">Customer Outcomes</p>
          <h2 className="mt-5 text-[clamp(2.1rem,4.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-framer-ink">
            Selected Case Studies
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <StickyShowcase kind="work" />
        </div>
      </div>
    </section>
  );
}
