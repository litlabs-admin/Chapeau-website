import { tickerLanes } from "@/lib/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const dotColor = ["text-fuchsia", "text-white", "text-fuchsia"];

export function Ticker() {
  return (
    <section className="bg-charcoal py-14 md:py-16" aria-label="Capabilities">
      <Reveal>
        <p className="shell label mb-9 text-center text-[0.82rem] text-teal-500">
          What we can do
        </p>
      </Reveal>

      <div className="flex flex-col gap-3.5 md:gap-5">
        {tickerLanes.map((lane, i) => (
          <Marquee
            key={lane.label}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={70 + i * 14}
          >
            <Lane terms={lane.terms} dot={dotColor[i % dotColor.length]} />
          </Marquee>
        ))}
      </div>
    </section>
  );
}

function Lane({ terms, dot }: { terms: string[]; dot: string }) {
  return (
    <div className="flex flex-nowrap items-center">
      {terms.map((term) => (
        <span key={term} className="flex items-center">
          <span className="label whitespace-nowrap px-3 text-[1rem] text-teal-500 md:px-6 md:text-[1.15rem]">
            {term}
          </span>
          <span className={`${dot} text-3xl leading-none`} aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}
