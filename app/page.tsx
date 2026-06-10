import { Hero } from "@/components/sections/Hero";
import { HeroDictionary } from "@/components/sections/HeroDictionary";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Ticker } from "@/components/sections/Ticker";
import { OfferBoxes } from "@/components/sections/OfferBoxes";

export default function HomePage() {
  return (
    <>
      {/* ── Client comparison — remove once a variant is chosen ── */}
      <div className="border-b-4 border-teal-700">
        <p className="shell label py-3 text-xs text-slate">
          Option A — Current hero
        </p>
        <Hero />
      </div>
      <div>
        <p className="shell label border-b border-charcoal/10 py-3 text-xs text-slate">
          Option B — Dictionary card hero
        </p>
        <HeroDictionary />
      </div>
      {/* ── End comparison ── */}
      <LogoMarquee />
      <CaseStudies />
      <Ticker />
      <OfferBoxes />
    </>
  );
}
