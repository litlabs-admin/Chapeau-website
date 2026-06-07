import { logoStrip } from "@/lib/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Trust strip — client names as a slow, wrapping marquee. Set as confident
 * wordmarks (no fake logo lockups) in charcoal on white. Real client logos can
 * drop in later; the marquee handles any count and wraps neatly on mobile.
 */
export function LogoMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="border-b border-charcoal/10 bg-white py-9 md:py-11"
    >
      <Reveal>
        <p className="shell label mb-7 text-center text-[0.72rem] text-slate">
          Trusted by growing businesses and service-led teams
        </p>
      </Reveal>
      <Marquee speed={48} itemClassName="items-center">
        {logoStrip.map((name) => (
          <span
            key={name}
            className="mx-7 whitespace-nowrap text-[1.35rem] font-medium tracking-[-0.02em] text-charcoal/35 transition-colors duration-300 hover:text-charcoal md:mx-10 md:text-[1.6rem]"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
