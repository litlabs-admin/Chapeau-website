import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Ticker } from "@/components/sections/Ticker";
import { OfferBoxes } from "@/components/sections/OfferBoxes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <CaseStudies />
      <Ticker />
      <OfferBoxes />
    </>
  );
}
