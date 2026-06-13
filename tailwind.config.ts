import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Digital lavender gives the site a distinct canvas.
 * Charcoal carries authority and structure.
 * Cyan carries digital energy.
 * Magenta is used as a controlled accent spark.
 * Colour should feel bold, but still disciplined.
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
        // Canvas and structure.
        white: "#E6E6FA",
        charcoal: "#111820",
        navy: "#0D1520",
        ink: "#040404",

        // Cyan teal scale: built from #00FFFF as the base.
        teal: {
          900: "#003333", // deepest cyan teal
          800: "#005A5A", // dark cyan teal
          700: "#008C8C", // strong teal
          600: "#00C3C3", // bright teal
          500: "#00FFFF", // base cyan
          400: "#66FFFF", // light cyan highlight
        },

        // Accent system.
        gold: "#FF00FF", // magenta accent
        copper: "#B97D4B",
        "copper-dark": "#55370F",

        // Neutral support.
        slate: "#374B55",
        glass: "#877D73",
        stone: "#E1CDC3",
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
        // Controlled gradients for media panels, overlays, ticker and CTA sections.
        "teal-primary":
          "linear-gradient(135deg, #003333 0%, #005A5A 35%, #00C3C3 72%, #00FFFF 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #0D1520 42%, #003333 78%, #00C3C3 130%)",
        "gold-premium":
          "linear-gradient(120deg, #111820 0%, #FF00FF 58%, #E6E6FA 100%)",
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
