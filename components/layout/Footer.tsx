import Link from "next/link";
import { nav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Logo } from "@/components/ui/Logo";

/**
 * Footer — simple and useful. Logo, positioning line, navigation, contact email,
 * social. Light Framer surface with charcoal copy and a fine top hairline.
 * Knowledge Room is omitted while hidden.
 */
export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-framer-wash text-framer-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Chapeau home" className="text-framer-ink">
            <Logo className="text-[1.3rem]" />
          </Link>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-framer-mute">
            {site.positioning}
          </p>
        </div>

        <nav
          className="md:col-span-3 md:col-start-7"
          aria-label="Footer navigation"
        >
          <p className="label text-[0.72rem] text-framer-mute">Navigate</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-framer-graphite/80 transition-colors hover:text-framer-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-[0.72rem] text-framer-mute">Get in touch</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-[0.95rem] text-framer-graphite/80 transition-colors hover:text-framer-ink"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[0.95rem] text-framer-graphite/80 transition-colors hover:text-framer-ink"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/[0.06]">
        <div className="shell flex flex-col gap-2 py-6 text-[0.8rem] text-framer-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="label text-[0.7rem] tracking-label text-framer-mute">
            Senior direction · Practical delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
