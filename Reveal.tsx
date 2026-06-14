import { HeroDictionary } from "@/components/sections/HeroDictionary";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Ticker } from "@/components/sections/Ticker";
import { OfferBoxes } from "@/components/sections/OfferBoxes";

export default function HomePage() {
  return (
    <>
      <HeroDictionary />
      <LogoMarquee />
      <CaseStudies />
      <Ticker />
      <OfferBoxes />
    </>
  );
}
