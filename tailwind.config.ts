import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Teal now drives the base visual system.
 * Charcoal protects readability.
 * Gold is used for fine boutique detail.
 * Magenta is used as a controlled accent spark.
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
        white: "#DFFFFB", // strong pale teal canvas
        charcoal: "#111820", // main text and structure
        navy: "#0D1520", // deep midnight surface
        ink: "#040404", // near-black

        // Teal system.
        // Built around a boutique jade teal, with cyan held as the brightest highlight.
        teal: {
          900: "#003B3A", // deepest jade
          800: "#005A58", // dark jade teal
          700: "#007F7B", // strong jade teal
          600: "#00AFA8", // bold boutique teal
          500: "#01C8C4", // main brand teal
          400: "#00FFFF", // bright cyan highlight
        },

        // Accent system.
        gold: "#C8A24A", // boutique gold detail
        copper: "#B97D4B", // warm copper support
        "copper-dark": "#55370F",
        magenta: "#C01872", // controlled magenta accent
        fuchsia: "#FF00FF", // bright accent, use rarely

        // Neutral support.
        slate: "#374B55",
        glass: "#877D73",
        stone: "#BDEDEA", // soft teal stone support
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
        // Stronger gradients for media panels, overlays, ticker and CTA sections.
        "teal-primary":
          "linear-gradient(135deg, #003B3A 0%, #005A58 30%, #00AFA8 70%, #01C8C4 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #0D1520 36%, #003B3A 72%, #01C8C4 128%)",
        "gold-premium":
          "linear-gradient(120deg, #8A6B24 0%, #C8A24A 55%, #F1DFA7 100%)",
        "boutique-glow":
          "linear-gradient(135deg, #DFFFFB 0%, #A8FFF8 36%, #01C8C4 72%, #C01872 130%)",
        "magenta-teal":
          "linear-gradient(135deg, #C01872 0%, #6D2F68 34%, #005A58 72%, #01C8C4 100%)",
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
