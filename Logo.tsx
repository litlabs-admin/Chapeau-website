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
      className="relative overflow-hidden border-b border-charcoal/10 bg-white py-9 md:py-11"
    >
      <div className="pointer-events-none absolute left-[6%] top-5 h-2 w-2 rounded-full bg-fuchsia" />
      <div className="pointer-events-none absolute right-[12%] bottom-6 h-1.5 w-20 rounded-full bg-teal-500" />

      <Reveal>
        <p className="shell label mb-7 text-center text-xs text-slate md:text-[0.72rem]">
          Trusted by growing businesses and service-led teams
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
              className="mx-7 h-7 w-auto md:mx-10 md:h-9"
            />
          )),
        )}
      </Marquee>
    </section>
  );
}
