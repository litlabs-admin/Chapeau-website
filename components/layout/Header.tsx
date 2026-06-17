"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Header — Framer "Echo" navbar.
 * Desktop: full-width at the top, collapsing on scroll into a centred fit-content
 * pill (rounded, blurred, shadowed) with a small dark notch. Mobile keeps a simple
 * bar with a hamburger + slide-down menu, going solid-white on scroll.
 */
// Smooth, non-bouncy collapse — one shared easing for the container, the child
// groups and the paint (background/shadow/radius) so everything moves together.
const EASE = [0.22, 1, 0.36, 1] as const;
const LAYOUT_T = { layout: { duration: 0.55, ease: EASE } };

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Over the blue homepage hero (top of page, before the collapse pill kicks in)
  // the nav sits transparent with white contents.
  const onHero = pathname === "/" && !scrolled;

  return (
    <header className="sticky top-0 z-50">
      {/* Desktop — collapsing pill */}
      <div className="hidden md:block">
        <div className="shell pt-3">
          <motion.div
            layout
            transition={LAYOUT_T}
            className={cn(
              "relative mx-auto flex items-center justify-between gap-6 border transition-[background-color,box-shadow,border-color,border-radius] duration-[550ms] ease-calm",
              scrolled
                ? "w-fit rounded-2xl border-white/60 bg-[#F7F7F7]/85 px-3 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.12)] backdrop-blur-[5px]"
                : "w-full rounded-none border-transparent bg-transparent px-0 py-2 shadow-none",
            )}
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -top-1.5 left-1/2 -ml-5 h-1.5 w-10 rounded-full bg-framer-ink/80"
              initial={false}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            />

            <motion.div
              layout
              transition={LAYOUT_T}
              className={cn(scrolled ? "" : "flex-1")}
            >
              <Link
                href="/"
                aria-label="Chapeau home"
                className={onHero ? "text-white" : "text-framer-ink"}
              >
                <Logo className="text-[1.15rem]" />
              </Link>
            </motion.div>

            <motion.nav
              layout
              transition={LAYOUT_T}
              className="flex items-center gap-1"
              aria-label="Primary"
            >
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-[0.92rem] tracking-[-0.01em] transition-colors duration-200",
                      onHero
                        ? active
                          ? "bg-white/10 text-white"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                        : active
                          ? "bg-black/[0.05] text-framer-ink"
                          : "text-framer-graphite/80 hover:bg-black/[0.05] hover:text-framer-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>

            <motion.div
              layout
              transition={LAYOUT_T}
              className={cn("flex justify-end", scrolled ? "" : "flex-1")}
            >
              <Button
                href={site.primaryCta.href}
                variant={onHero ? "outline" : "dark"}
                withArrow={false}
              >
                {site.primaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile — bar + slide-down menu */}
      <div
        className={cn(
          "border-b transition-colors duration-300 ease-calm md:hidden",
          scrolled
            ? "border-black/[0.06] bg-white/90 shadow-[0_1px_24px_-14px_rgba(24,26,26,0.45)] backdrop-blur-md"
            : "border-transparent bg-white/0",
        )}
      >
        <div className="shell flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Chapeau home"
            className={onHero ? "text-white" : "text-framer-ink"}
          >
            <Logo className="text-[1.15rem]" />
          </Link>

          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center",
              onHero ? "text-white" : "text-framer-ink",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 h-px w-6 transition-all duration-300 ease-calm",
                  onHero ? "bg-white" : "bg-framer-ink",
                  open ? "top-2 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2 h-px w-6 transition-all duration-200",
                  onHero ? "bg-white" : "bg-framer-ink",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-6 transition-all duration-300 ease-calm",
                  onHero ? "bg-white" : "bg-framer-ink",
                  open ? "top-2 -rotate-45" : "top-[0.875rem]",
                )}
              />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-black/[0.06] bg-white",
            "transition-[max-height,opacity] duration-300 ease-calm",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-lg transition-colors duration-200",
                    active
                      ? "bg-black/[0.05] text-framer-ink"
                      : "text-framer-graphite/80 hover:text-framer-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Button
                href={site.primaryCta.href}
                variant="dark"
                withArrow={false}
                className="w-full"
              >
                {site.primaryCta.label}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
