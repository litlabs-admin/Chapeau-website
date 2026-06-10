import Image from "next/image";
import { logoStrip } from "@/lib/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Trust strip — real client logos as a slow, wrapping marquee. Rendered in full
 * colour on white. The marquee handles any count and wraps neatly on mobile, so
 * more logos drop in via the logoStrip data without touching this component, and
 * it keeps scrolling under the cursor (no pause on hover).
 */
export function LogoMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="border-b border-charcoal/10 bg-white py-9 md:py-11"
    >
      <Reveal>
        <p className="shell label mb-7 text-center text-xs text-slate md:text-[0.72rem]">
          Trusted by growing businesses and service-led teams
        </p>
      </Reveal>
      <Marquee speed={90} itemClassName="items-center" pauseOnHover={false}>
        {/*
         * Repeat the set so one marquee track is wider than the viewport — with
         * only a handful of logos a single track wouldn't fill the screen and the
         * loop would show a gap instead of running seamlessly.
         */}
        {Array.from({ length: 4 }).flatMap((_, rep) =>
          logoStrip.map((logo) => (
            <Image
              key={`${logo.src}-${rep}`}
              src={logo.src}
              alt={rep === 0 ? logo.alt : ""}
              aria-hidden={rep === 0 ? undefined : true}
              width={logo.width}
              height={logo.height}
              className="mx-7 h-7 w-auto md:mx-10 md:h-9"
            />
          )),
        )}
      </Marquee>
    </section>
  );
}
