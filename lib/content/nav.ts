/**
 * Launch navigation — exact labels and order from the Build Rules.
 * Knowledge Room is intentionally absent (hidden until built).
 */
export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "The Collective", href: "/collective" },
  { label: "Contact Us", href: "/contact" },
];
