import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * White is now white again.
 * Teal stays vivid and deliberate.
 * Charcoal protects readability.
 * Gold is used for boutique detailing.
 * Magenta is used as the bold counterpoint.
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
        white: "#FFFFFF",
        paper: "#FFFFFF",

        charcoal: "#111820",
        navy: "#071115",
        ink: "#040404",

        teal: {
          900: "#003333",
          800: "#005C5C",
          700: "#008A8A",
          600: "#00C7C7",
          500: "#00FFFF",
          400: "#4DFFFF",
        },

        gold: "#D4AF37",
        copper: "#B97D4B",
        "copper-dark": "#55370F",
        magenta: "#C01872",
        fuchsia: "#FF00FF",

        slate: "#203943",
        glass: "#006F6F",
        stone: "#00C7C7",
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
        "teal-primary":
          "linear-gradient(135deg, #003333 0%, #005C5C 28%, #00C7C7 68%, #00FFFF 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #071115 36%, #003333 70%, #00FFFF 128%)",
        "gold-premium":
          "linear-gradient(120deg, #8A6B24 0%, #D4AF37 55%, #FFE28A 100%)",
        "boutique-glow":
          "linear-gradient(135deg, #00FFFF 0%, #00C7C7 34%, #D4AF37 68%, #FF00FF 128%)",
        "magenta-teal":
          "linear-gradient(135deg, #FF00FF 0%, #C01872 32%, #005C5C 70%, #00FFFF 100%)",
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
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
