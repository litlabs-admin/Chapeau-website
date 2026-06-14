import type { Metadata } from "next";
import { collectiveHero } from "@/lib/content/collective";
import { PageIntro } from "@/components/sections/PageIntro";
import { WhyCollective } from "@/components/sections/WhyCollective";
import { People } from "@/components/sections/People";
import { WorkJoins } from "@/components/sections/WorkJoins";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "The Collective",
  description: collectiveHero.intro[0],
};

export default function CollectivePage() {
  return (
    <>
      <PageIntro
        eyebrow={collectiveHero.eyebrow}
        title={collectiveHero.title}
        intro={collectiveHero.intro}
        highlight={["Collective"]}
      />
      <WhyCollective />
      <People />
      <WorkJoins />
      <FinalCTA />
    </>
  );
}
