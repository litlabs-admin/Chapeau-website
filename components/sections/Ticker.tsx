import { tickerLanes } from "@/lib/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const dotColor = ["text-framer-lavender", "text-framer-sky", "text-framer-lavender"];

const highlightedTerms = new Set([
  // Row 1 — Strategy and growth
  "Revenue strategy",
  "Pipeline acceleration",
  "Growth engineering",
  "Account-based marketing",
  // Row 2 — Marketing and content
  "AI SEO",
  "Performance marketing",
  "Brand & positioning",
  // Row 3 — AI, systems and infrastructure
  "AI agents",
  "Voice agents",
  "Agentic workflows",
  "Lead infrastructure",
]);

export function Ticker() {
  return (
    <section
      className="border-y border-white/[0.08] bg-framer-ink py-14 md:py-16"
      aria-label="Capabilities"
    >
      <Reveal>
        <p className="shell label mb-9 text-center text-[0.82rem] text-white/45">
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
            <Lane terms={lane.terms} dot={dotColor[i % dotColor.length]} highlighted={highlightedTerms} />
          </Marquee>
        ))}
      </div>
    </section>
  );
}

function Lane({ terms, dot, highlighted }: { terms: string[]; dot: string; highlighted: Set<string> }) {
  return (
    <div className="flex flex-nowrap items-center">
      {terms.map((term) => (
        <span key={term} className="flex items-center">
          <span className={`label whitespace-nowrap px-3 text-[1rem] md:px-6 md:text-[1.15rem] ${highlighted.has(term) ? "text-magenta" : "text-white/80"}`}>
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
