import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content/site";

/**
 * Framer "Echo" type system, self-hosted.
 * Stack Sans Text (body/UI), Stack Sans Headline (headings), Barlow Condensed
 * (giant display), Fragment Mono (eyebrow labels). woff2 files live in app/fonts.
 */
const stackSansText = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/StackSansText-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/StackSansText-Medium.woff2", weight: "500", style: "normal" },
  ],
});

const stackSansHeadline = localFont({
  variable: "--font-headline",
  display: "swap",
  src: [
    { path: "./fonts/StackSansHeadline-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/StackSansHeadline-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/StackSansHeadline-SemiBold.woff2", weight: "600", style: "normal" },
  ],
});

const barlowCondensed = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/BarlowCondensed-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BarlowCondensed-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
});

const fragmentMono = localFont({
  variable: "--font-mono",
  display: "swap",
  src: [{ path: "./fonts/FragmentMono-Regular.woff2", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chapeau.co"),
  title: {
    default: "Chapeau — Senior marketing expertise and practical AI support",
    template: "%s — Chapeau",
  },
  description: site.positioning,
  openGraph: {
    title: "Chapeau",
    description: site.positioning,
    type: "website",
    siteName: "Chapeau",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${stackSansText.variable} ${stackSansHeadline.variable} ${barlowCondensed.variable} ${fragmentMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
