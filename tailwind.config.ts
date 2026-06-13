import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Teal carries the brand. Magenta now carries the weight. Charcoal moves into the accent token.
 * Digital lavender gives the whitespace a softer canvas.
 * Colour appears in controlled flashes, never as a loud gradient brand.
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
        // Neutrals: digital lavender replaces pure white as the main canvas.
        white: "#E6E6FA",
        charcoal: "#FF00FF",
        navy: "#B000B0", // deep magenta
        ink: "#5A005A", // near-black magenta

        // Teal scale: brand colour system built from #00FFFF as the base.
        teal: {
          900: "#005A5A", // deepest cyan teal
          800: "#007878", // dark cyan teal
          700: "#00C3C3", // strong cyan teal
          600: "#00E1E1", // bright cyan teal
          500: "#00FFFF", // base cyan
          400: "#2DFFFF", // light cyan highlight
        },

        // Accent system: the gold token now carries the old charcoal.
        gold: "#111820", // charcoal accent
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
        // Controlled, selective gradients for hero media, case overlays, ticker and CTA.
        "teal-primary":
          "linear-gradient(135deg, #005A5A 0%, #007878 35%, #00C3C3 70%, #00FFFF 100%)",
        "teal-dark":
          "linear-gradient(140deg, #5A005A 0%, #B000B0 45%, #FF00FF 80%, #00C3C3 130%)",
        "gold-premium":
          "linear-gradient(120deg, #040404 0%, #111820 55%, #E6E6FA 100%)",
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
        // Calm, premium easing. Nothing bouncy.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
