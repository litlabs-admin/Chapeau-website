import type { Metadata } from "next";
import {
  howWeWorkHero,
  beforeWork,
  postSale,
} from "@/lib/content/how-we-work";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkPrinciples } from "@/components/sections/WorkPrinciples";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description: howWeWorkHero.intro,
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow={howWeWorkHero.eyebrow}
        title={howWeWorkHero.title}
        intro={howWeWorkHero.intro}
        highlight={["Sales"]}
      />
      <ProcessSection
        eyebrow={beforeWork.eyebrow}
        heading={beforeWork.heading}
        steps={beforeWork.steps}
        tone="light"
      />
      <ProcessSection
        eyebrow={postSale.eyebrow}
        heading={postSale.heading}
        steps={postSale.steps}
        tone="dark"
      />
      <WorkPrinciples />
      <FinalCTA />
    </>
  );
}
