import type { Metadata } from "next";
import { examplesHero } from "@/lib/content/examples";
import { PageIntro } from "@/components/sections/PageIntro";
import { ExampleEntries } from "@/components/sections/ExampleEntries";
import { QuoteProof } from "@/components/sections/QuoteProof";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Examples",
  description: examplesHero.intro,
};

export default function ExamplesPage() {
  return (
    <>
      <PageIntro
        eyebrow={examplesHero.eyebrow}
        title={examplesHero.title}
        intro={examplesHero.intro}
        highlight={["growing businesses"]}
      />
      <ExampleEntries />
      <QuoteProof />
      <FinalCTA />
    </>
  );
}
