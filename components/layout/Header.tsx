"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Header.
 * Real white background, charcoal navigation, subtle teal active state.
 * Sticky with a light divider and a small shadow after scroll.
 */
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md transition-all duration-300 ease-calm",
        scrolled
          ? "border-b border-charcoal/10 shadow-[0_1px_24px_-12px_rgba(17,24,32,0.4)]"
          : "border-b border-charcoal/5",
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-[4.75rem]">
        <Link href="/" aria-label="Chapeau home" className="text-charcoal">
          <Logo className="text-[1.15rem]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[0.95rem] tracking-[-0.01em] transition-colors duration-200",
                  active ? "text-charcoal" : "text-slate hover:text-charcoal",
                )}
              >
                {item.label}

                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-0.5 rounded-full bg-teal-500 transition-all duration-300 ease-calm",
                    active ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={site.primaryCta.href} variant="primary">
            {site.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-charcoal md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-charcoal transition-all duration-300 ease-calm",
                open ? "top-2 rotate-45" : "top-0.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-px w-6 bg-charcoal transition-all duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-charcoal transition-all duration-300 ease-calm",
                open ? "top-2 -rotate-45" : "top-[0.875rem]",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-charcoal/5 bg-[#FFFFFF] md:hidden",
          "transition-[max-height,opacity] duration-300 ease-calm",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2.5 text-lg transition-colors duration-200",
                  active ? "text-charcoal" : "text-slate hover:text-charcoal",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Button
              href={site.primaryCta.href}
              variant="primary"
              className="w-full"
            >
              {site.primaryCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
