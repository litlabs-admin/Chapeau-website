import { insightsNotFound } from "@/lib/content/insights";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";

export default function InsightNotFound() {
  return (
    <>
      <PageIntro
        eyebrow={insightsNotFound.eyebrow}
        title={insightsNotFound.title}
        intro={insightsNotFound.intro}
      />
      <div className="pb-28 pt-4 text-center">
        <Button href="/insights" variant="dark">
          {insightsNotFound.ctaLabel}
        </Button>
      </div>
    </>
  );
}
