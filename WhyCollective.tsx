import { caseStudies, type CaseStudy } from "@/lib/content/home";
import { MediaPanel } from "@/components/media/MediaPanel";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const caseStyles = [
  {
    shell: "bg-teal-500 text-charcoal border-charcoal/20",
    eyebrow: "text-charcoal/70",
    body: "text-charcoal/80",
    enabledBorder: "border-fuchsia",
    enabledLabel: "text-charcoal/60",
    enabledText: "text-charcoal",
    button:
      "border-charcoal/30 text-charcoal hover:border-fuchsia hover:text-fuchsia",
    flourish: "bg-fuchsia",
  },
  {
    shell: "bg-fuchsia text-white border-fuchsia",
    eyebrow: "text-white/70",
    body: "text-white/80",
    enabledBorder: "border-white",
    enabledLabel: "text-white/55",
    enabledText: "text-white",
    button: "border-white/45 text-white hover:border-teal-500 hover:text-teal-500",
    flourish: "bg-teal-500",
  },
  {
    shell: "bg-white text-charcoal border-charcoal/10",
    eyebrow: "text-fuchsia",
    body: "text-slate",
    enabledBorder: "border-teal-500",
    enabledLabel: "text-slate",
    enabledText: "text-charcoal",
    button:
      "border-charcoal/25 text-charcoal hover:border-fuchsia hover:text-fuchsia",
    flourish: "bg-teal-500",
  },
];

export function CaseStudies() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 md:py-28"
      aria-label="Selected work"
    >
      <div className="pointer-events-none absolute left-[7%] top-20 h-28 w-28 rounded-full border border-fuchsia/15" />
      <div className="pointer-events-none absolute right-[9%] top-40 h-2 w-32 rounded-full bg-teal-500/50" />
      <div className="pointer-events-none absolute bottom-28 left-[18%] h-3 w-3 rounded-full bg-fuchsia/70" />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>Selected work</Label>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-charcoal">
            Work shaped by the problem, measured by the outcome.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Selected case studies
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-7 md:mt-18 md:gap-9">
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
  const style = caseStyles[index % caseStyles.length];

  return (
    <Reveal
      as="article"
      className={cn(
        "relative overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_80px_-56px_rgba(17,24,32,0.65)] md:p-8",
        style.shell,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute right-6 top-6 h-2 w-24 rounded-full opacity-80",
          style.flourish,
        )}
      />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-current/10" />

      <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-14">
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
            className="aspect-[16/11] w-full border border-white/20"
          >
            <div className="flex h-full items-start justify-between p-5 sm:p-6 md:p-8">
              <span className="label rounded-full border border-white/30 px-3 py-1 text-[0.75rem] text-white/90 backdrop-blur-sm md:text-[0.66rem]">
                {cs.type}
              </span>
              <span className="label text-[1.8rem] font-semibold leading-none text-white/20 md:text-[2.6rem]">
                0{index + 1}
              </span>
            </div>
          </MediaPanel>
        </div>

        <div className={cn("md:col-span-5", flip ? "md:order-1" : "md:order-2")}>
          <p className={cn("label text-center text-[0.74rem] md:text-left", style.eyebrow)}>
            {cs.business}
          </p>

          <h3 className="mt-4 text-center text-[clamp(1.5rem,2.4vw,2.05rem)] font-semibold leading-[1.1] tracking-[-0.02em] md:text-left">
            {cs.headline}
          </h3>

          <p className={cn("mt-5 text-center leading-relaxed md:text-left", style.body)}>
            {cs.context}
          </p>

          <div className={cn("mt-7 border-l-2 pl-4 md:pl-5", style.enabledBorder)}>
            <p className={cn("label text-[0.75rem] md:text-[0.68rem]", style.enabledLabel)}>
              What Chapeau enabled
            </p>
            <p className={cn("mt-2 font-medium leading-relaxed", style.enabledText)}>
              {cs.enabled}
            </p>
          </div>

          <div className="mt-7 flex justify-center md:justify-start">
            <Button href={cs.cta.href} variant="ghost" className={style.button}>
              {cs.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
