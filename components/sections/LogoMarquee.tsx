import Image from "next/image";
import { logoStrip } from "@/lib/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Trust strip.
 * White background, black/charcoal copy, with small teal and fuchsia details.
 */
export function LogoMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="relative overflow-hidden border-b border-charcoal/10 bg-white py-12 md:py-16"
    >
      <div className="pointer-events-none absolute left-[6%] top-5 h-2 w-2 rounded-full bg-framer-lavender" />

      <Reveal>
        <p className="shell label mb-12 text-center text-[0.72rem] text-framer-mute md:mb-16">
          Trusted by
        </p>
      </Reveal>

      <Marquee speed={90} itemClassName="items-center" pauseOnHover={false}>
        {Array.from({ length: 4 }).flatMap((_, rep) =>
          logoStrip.map((logo) => (
            <Image
              key={`${logo.src}-${rep}`}
              src={logo.src}
              alt={rep === 0 ? logo.alt : ""}
              aria-hidden={rep === 0 ? undefined : true}
              width={logo.width}
              height={logo.height}
              className="mx-7 h-11 w-auto md:mx-10 md:h-14"
            />
          )),
        )}
      </Marquee>
    </section>
  );
}
