import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "inverse" | "ghost";

/**
 * Button — charcoal-on-white (primary), white-on-charcoal (inverse), or a
 * link-style ghost with a teal underline. Teal hover/border state throughout.
 * Gold/copper is never used as a full button fill — glint only.
 */
const base =
  "group inline-flex items-center justify-center gap-2 label text-[0.82rem] " +
  "min-h-[44px] transition-all duration-300 ease-calm select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-white px-7 rounded-full border border-charcoal " +
    "hover:bg-teal-800 hover:border-teal-600",
  inverse:
    "bg-white text-charcoal px-7 rounded-full border border-white " +
    "hover:bg-transparent hover:text-white hover:border-teal-400",
  ghost:
    "text-charcoal px-1 border-b border-charcoal/25 rounded-none pb-1 " +
    "hover:border-teal-600 hover:text-teal-700",
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
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}
