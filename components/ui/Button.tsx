import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "inverse" | "ghost" | "dark" | "light" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2 label text-[0.82rem] " +
  "min-h-[44px] transition-all duration-300 ease-calm select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-teal-500 px-7 rounded-full border border-charcoal " +
    "hover:bg-fuchsia hover:text-white hover:border-fuchsia",
  inverse:
    "bg-white text-charcoal px-7 rounded-full border border-white " +
    "hover:bg-charcoal hover:text-teal-500 hover:border-teal-500",
  ghost:
    "text-charcoal px-1 border-b border-charcoal/25 rounded-none pb-1 " +
    "hover:border-fuchsia hover:text-fuchsia",

  // Framer "Echo" buttons — solid dark / solid light pills with an 8px radius.
  // Stack Sans 500, sentence case (override the mono uppercase `label` base).
  dark:
    "bg-framer-ink text-white px-5 rounded-lg border border-framer-ink " +
    "font-sans font-medium normal-case tracking-normal text-[0.95rem] " +
    "hover:bg-black hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,0,0,0.22)] " +
    "active:translate-y-0 active:shadow-none active:scale-[0.98]",
  light:
    "bg-white text-framer-ink px-5 rounded-lg border border-black/5 " +
    "font-sans font-medium normal-case tracking-normal text-[0.95rem] " +
    "hover:bg-framer-card hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,0,0,0.10)] " +
    "active:translate-y-0 active:shadow-none active:scale-[0.98]",

  // Transparent outlined pill — white border + white text, for the nav over the
  // blue hero. Subtle fill on hover.
  outline:
    "bg-transparent text-white px-5 rounded-full border border-white/70 " +
    "font-sans font-medium normal-case tracking-normal text-[0.95rem] hover:bg-white/10",
};

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = true,
  className,
  glowBorder,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  glowBorder?: boolean;
}) {
  if (glowBorder) {
    return (
      <div
        className={cn("btn-glow rounded-lg", className)}
        style={{
          "--btn-bg": variant === "dark" ? "#181A1A" : "#FFFFFF",
        } as React.CSSProperties}
      >
        <Link
          href={href}
          className={cn(base, variants[variant], "w-full border-0 bg-transparent")}
        >
          {children}
          {withArrow && <Arrow />}
        </Link>
      </div>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}
