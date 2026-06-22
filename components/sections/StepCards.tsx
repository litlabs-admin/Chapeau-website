"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whatNext } from "@/lib/content/contact";
import { Label } from "@/components/ui/Label";

const enter = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

export function StepCards() {
  const reduce = useReducedMotion();

  return (
    <div className="text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -14% 0px" }}
        transition={enter}
      >
        <Label>{whatNext.eyebrow}</Label>
      </motion.div>

      <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {whatNext.steps.map((step, i) => (
          <motion.li
            key={step}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -14% 0px" }}
            transition={{ ...enter, delay: i * 0.09 }}
            whileHover={
              reduce
                ? {}
                : {
                    y: -5,
                    boxShadow: "0 12px 32px -8px rgba(255,46,138,0.18)",
                  }
            }
            className="group flex cursor-default flex-col items-center gap-3 rounded-xl border border-charcoal/10 bg-charcoal/[0.02] p-6 text-center transition-colors duration-300 hover:border-[#FF2E8A]/25 hover:bg-white"
          >
            <span className="label text-[0.9rem] text-[#FF2E8A] transition-all duration-200 group-hover:scale-110 group-hover:text-[#FF2E8A]">
              0{i + 1}
            </span>
            <span className="leading-relaxed text-charcoal">{step}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
