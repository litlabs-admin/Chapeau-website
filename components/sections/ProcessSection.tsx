import { type ProcessStep } from "@/lib/content/how-we-work";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Process section — a numbered editorial sequence used for both "Before we work
 * together" and "How we work post-sale". Each step pairs a large index + title on
 * the left with body copy, optional named sub-documents, and a teal pull-line on
 * the right, separated by hairlines. `tone` swaps it onto a charcoal field.
 */
export function ProcessSection({
  eyebrow,
  heading,
  steps,
  tone = "light",
  startIndex = 1,
}: {
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
  tone?: "light" | "dark";
  startIndex?: number;
}) {
  const dark = tone === "dark";
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        dark ? "bg-framer-ink text-white" : "bg-white text-framer-ink",
      )}
      aria-label={eyebrow}
    >
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p
            className={cn(
              "label text-[0.72rem]",
              dark ? "text-white/55" : "text-framer-mute",
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-5 text-[clamp(2rem,4.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em]",
              dark ? "text-white" : "text-framer-ink",
            )}
          >
            {heading}
          </h2>
        </Reveal>

        <ol className="mt-14 md:mt-16">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 0.05}>
              <div
                className={cn(
                  "grid gap-6 border-t py-9 md:grid-cols-12 md:gap-10 md:py-11",
                  dark ? "border-white/12" : "border-black/10",
                )}
              >
                {/* Index + title */}
                <div className="md:col-span-5">
                  <div className="flex items-start justify-center gap-4 md:justify-start">
                    <span
                      className={cn(
                        "font-condensed text-[1.3rem] font-semibold leading-none text-[#FF2E8A] md:text-[1.5rem]",
                      )}
                    >
                      {String(startIndex + i).padStart(2, "0")}
                    </span>
                    <h3 className="text-center text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] md:text-left md:text-[1.6rem]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="md:col-span-7">
                  <div
                    className={cn(
                      "space-y-3.5 text-center text-[0.95rem] leading-relaxed md:text-left md:text-base",
                      dark ? "text-white/70" : "text-framer-graphite",
                    )}
                  >
                    {step.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  {step.points && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {step.points.map((pt) => (
                        <div
                          key={pt.label}
                          className={cn(
                            "rounded-2xl border p-5 shadow-[0_4px_18px_rgba(0,0,0,0.08)]",
                            dark
                              ? "border-white/10 bg-framer-graphite"
                              : "border-black/5 bg-framer-card",
                          )}
                        >
                          <p className="label text-[0.68rem] text-[#FF2E8A]">
                            {pt.label}
                          </p>
                          <p
                            className={cn(
                              "mt-2 text-[0.9rem] leading-relaxed md:text-[0.92rem]",
                              dark ? "text-white/65" : "text-framer-graphite",
                            )}
                          >
                            {pt.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.pull && (
                    <p
                      className={cn(
                        "mt-6 border-l-2 border-[#FF2E8A] pl-5 text-[1.05rem] font-medium leading-relaxed",
                        dark ? "text-white" : "text-framer-ink",
                      )}
                    >
                      {step.pull}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
