import { caseStudies, type CaseStudy } from "@/lib/content/home";
import { MediaPanel } from "@/components/media/MediaPanel";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Selected work — editorial case-study sections following the component rule:
 * Business · Type · Headline · Context · What Chapeau enabled · CTA · Image panel.
 * Controlled asymmetry: the media panel alternates side per row on desktop.
 * Show, don't tell — the work carries the section.
 */
export function CaseStudies() {
  return (
    <section className="py-20 md:py-28" aria-label="Selected work">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>Selected work</Label>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Work shaped by the problem, measured by the outcome.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Selected Case Studies
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-20 md:gap-28">
          {caseStudies.map((cs, i) => (
            <CaseRow key={cs.id} cs={cs} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({
  cs,
  flip,
  index,
}: {
  cs: CaseStudy;
  flip: boolean;
  index: number;
}) {
  return (
    <Reveal
      as="article"
      className="grid items-center gap-8 md:grid-cols-12 md:gap-14"
    >
      {/* Media */}
      <div
        className={cn(
          "md:col-span-7",
          flip ? "md:order-2 md:col-start-6" : "md:order-1",
        )}
      >
        <MediaPanel
          src={cs.image}
          alt={cs.imageAlt}
          overlay={cs.overlay}
          photo
          className="aspect-[16/11] w-full"
        >
          <div className="flex h-full items-start justify-between p-5 sm:p-6 md:p-8">
            <span className="label rounded-full border border-white/25 px-3 py-1 text-[0.75rem] text-white/85 backdrop-blur-sm md:text-[0.66rem]">
              {cs.type}
            </span>
            <span className="label text-[1.8rem] font-semibold leading-none text-white/15 md:text-[2.6rem]">
              0{index + 1}
            </span>
          </div>
        </MediaPanel>
      </div>

      {/* Copy */}
      <div className={cn("md:col-span-5", flip ? "md:order-1" : "md:order-2")}>
        <p className="label text-center text-[0.74rem] text-teal-700 md:text-left">{cs.business}</p>
        <h3 className="mt-4 text-center text-[clamp(1.5rem,2.4vw,2.05rem)] font-semibold leading-[1.1] tracking-[-0.02em] md:text-left">
          {cs.headline}
        </h3>
        <p className="mt-5 text-center leading-relaxed text-slate md:text-left">{cs.context}</p>

        <div className="mt-7 border-l-2 border-teal-600 pl-4 md:pl-5">
          <p className="label text-[0.75rem] text-slate md:text-[0.68rem]">What Chapeau enabled</p>
          <p className="mt-2 font-medium leading-relaxed text-charcoal">
            {cs.enabled}
          </p>
        </div>

        <div className="mt-7 flex justify-center md:justify-start">
          <Button href={cs.cta.href} variant="ghost">
            {cs.cta.label}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
