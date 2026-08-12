import type { Metadata } from "next";
import { privacyHero } from "@/lib/content/privacy";
import { PageIntro } from "@/components/sections/PageIntro";
import { PolicyContent } from "@/components/sections/PolicyContent";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description: privacyHero.intro,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow={privacyHero.eyebrow}
        title={privacyHero.title}
        intro={`${privacyHero.intro} Last updated: ${privacyHero.lastUpdated}.`}
      />
      <PolicyContent />
    </>
  );
}
