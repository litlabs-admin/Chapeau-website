import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Cyan teal now drives the visual system at full strength.
 * Charcoal protects structure and readability.
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
        // Base and structure.
        white: "#00FFFF", // full-strength cyan teal canvas
        charcoal: "#111820", // main text and structure
        navy: "#071115", // deep midnight surface
        ink: "#040404", // near-black

        // Cyan teal system.
        // Built around #00FFFF as the true base colour.
        teal: {
          900: "#003333", // deepest teal
          800: "#005C5C", // dark teal
          700: "#008A8A", // strong teal
          600: "#00C7C7", // vivid teal
          500: "#00FFFF", // base cyan teal
          400: "#4DFFFF", // bright cyan highlight
        },

        // Accent system.
        gold: "#D4AF37", // boutique gold detail
        copper: "#B97D4B", // warm copper support
        "copper-dark": "#55370F",
        magenta: "#C01872", // rich magenta accent
        fuchsia: "#FF00FF", // full-strength magenta, use for punch

        // Support colours.
        slate: "#203943", // dark blue-grey support
        glass: "#006F6F", // teal glass support
        stone: "#00C7C7", // vivid teal support
        paper: "#FFFFFF", // true white, available when needed
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
        // Strong gradients for media panels, overlays, ticker and CTA sections.
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
        // Calm, premium easing. Nothing bouncy.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
