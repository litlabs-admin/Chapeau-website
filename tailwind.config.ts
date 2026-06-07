import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens — lifted directly from the Global Build Rules colour system.
 * Teal carries the brand · charcoal holds the weight · gold/copper is the glint ·
 * white space gives confidence. Colour appears in controlled flashes, never as a
 * loud gradient brand.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals — white means white, charcoal over black.
        white: "#FFFFFF",
        charcoal: "#111820",
        navy: "#0D1520", // deep navy charcoal
        ink: "#040404", // near-black

        // Teal scale — the brand.
        teal: {
          900: "#0F2D2D", // deep bottle teal
          800: "#05414B", // dark teal
          700: "#05737D", // museum teal
          600: "#058791", // ceramic teal
          500: "#059BA5", // aqua teal
          400: "#05C3C3", // bright aqua
        },

        // Gold / copper — the glint, accents only.
        gold: "#A58769", // whisky gold
        copper: "#B97D4B", // antique copper
        "copper-dark": "#55370F",

        // Neutral support.
        slate: "#374B55", // muted blue-grey
        glass: "#877D73", // glass grey
        stone: "#E1CDC3", // warm stone
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        condensed: ["var(--font-oswald)", "var(--font-hanken)", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        shell: "1280px",
      },
      backgroundImage: {
        // Controlled, selective gradients (hero media, case overlays, ticker, CTA).
        "teal-primary":
          "linear-gradient(135deg, #0F2D2D 0%, #05414B 35%, #05737D 70%, #059BA5 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #0D1520 45%, #0F2D2D 80%, #05737D 130%)",
        "gold-premium":
          "linear-gradient(120deg, #A58769 0%, #B97D4B 55%, #E1CDC3 100%)",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left linear infinite",
        "marquee-right": "marquee-right linear infinite",
      },
      transitionTimingFunction: {
        // Calm, premium easing — nothing bouncy.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
