"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONSENT_KEY = "chapeau-cookie-consent";

/**
 * Simple cookie notice — a single "Accept" action, no reject/manage options.
 * Shown once per browser (localStorage flag); dismissal is permanent.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(CONSENT_KEY) !== "accepted") {
      setVisible(true);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-black/[0.06] bg-framer-ink text-white"
        >
          <div className="shell flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between">
            <p className="max-w-2xl text-[0.9rem] leading-relaxed text-white/80">
              We use a small number of essential cookies, including Google
              reCAPTCHA to keep spam off our contact form. See our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-white"
              >
                Privacy &amp; Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <button
              type="button"
              onClick={accept}
              className="label inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-white px-6 text-[0.78rem] text-framer-ink transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.98]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
