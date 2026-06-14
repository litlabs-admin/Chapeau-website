import Link from "next/link";
import { nav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Logo } from "@/components/ui/Logo";

/**
 * Footer — simple and useful. Logo, positioning line, navigation, contact email,
 * social. Charcoal holds the weight here; a single teal/gold glint on the rule.
 * Knowledge Room is omitted while hidden.
 */
export function Footer() {
  return (
    <footer className="bg-charcoal text-teal-500">
      <div className="foil-line h-px w-full opacity-50" />
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Chapeau home" className="text-teal-500">
            <Logo className="text-[1.3rem]" />
          </Link>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-teal-500/65">
            {site.positioning}
          </p>
        </div>

        <nav
          className="md:col-span-3 md:col-start-7"
          aria-label="Footer navigation"
        >
          <p className="label text-[0.72rem] text-fuchsia">Navigate</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-teal-500/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-[0.72rem] text-fuchsia">Get in touch</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-[0.95rem] text-teal-500/75 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[0.95rem] text-teal-500/75 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-500/20">
        <div className="shell flex flex-col gap-2 py-6 text-[0.8rem] text-teal-500/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="label text-[0.7rem] tracking-label text-teal-500/45">
            Senior direction · Practical delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
