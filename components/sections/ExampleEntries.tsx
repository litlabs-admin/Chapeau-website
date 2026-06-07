import { caseStudies, type CaseStudy } from "@/lib/content/home";
import { MediaPanel } from "@/components/media/MediaPanel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Featured work — the full Examples index. A magazine/portfolio treatment that
 * differs from the home teaser: each entry opens with a numbered hairline header
 * (index · business · type), then a strong full-width image panel, with the
 * headline, context and "What Chapeau enabled" set in an editorial two-column
 * grid beneath. Show, don't tell.
 */
export function ExampleEntries() {
  return (
    <section className="py-16 md:py-24" aria-label="Featured work">
      <div className="shell flex flex-col gap-20 md:gap-28">
        {caseStudies.map((cs, i) => (
          <Entry key={cs.id} cs={cs} index={i} />
        ))}
      </div>
    </section>
  );
}

function Entry({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Reveal as="article">
      {/* Numbered hairline header — business name leads as a condensed wordmark */}
      <div className="border-t border-charcoal/15 pt-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-condensed text-[1.9rem] font-semibold leading-none text-charcoal/20">
            0{index + 1}
          </span>
          <h3 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold uppercase leading-none tracking-[0.01em] text-charcoal">
            {cs.business}
          </h3>
          <span
            className="hidden h-1.5 w-1.5 rounded-full bg-teal-500 sm:block"
            aria-hidden="true"
          />
          <span className="label text-[0.74rem] text-slate">{cs.type}</span>
        </div>
      </div>

      {/* Headline — the story line */}
      <h2 className="mt-5 max-w-3xl text-center text-[clamp(1.55rem,3.1vw,2.5rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-charcoal md:text-left">
        {cs.headline}
      </h2>

      {/* Image panel + editorial copy */}
      <div className="mt-9 grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <MediaPanel
            src={cs.image}
            alt={cs.imageAlt}
            overlay={cs.overlay}
            className="aspect-[16/10] w-full"
          >
            <div className="flex h-full items-end p-6 md:p-8">
              <span className="label rounded-full border border-white/25 px-3 py-1 text-[0.66rem] text-white/85 backdrop-blur-sm">
                {cs.type}
              </span>
            </div>
          </MediaPanel>
        </div>

        <div className="flex flex-col md:col-span-5">
          <p className="leading-relaxed text-slate">{cs.context}</p>
          <div className="mt-7 border-l-2 border-teal-600 pl-5">
            <p className="label text-[0.68rem] text-slate">Work delivered</p>
            <p className="mt-2 font-medium leading-relaxed text-charcoal">
              {cs.workDelivered}
            </p>
          </div>
          <div className="mt-5 border-l-2 border-charcoal/15 pl-5">
            <p className="label text-[0.68rem] text-slate">Outcome</p>
            <p className="mt-2 leading-relaxed text-charcoal">
              {cs.outcome}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
