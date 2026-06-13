import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Boutique jade carries the brand.
 * Charcoal carries structure and readability.
 * Digital lavender gives the site a softer canvas.
 * Gold is used for fine detailing.
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
        white: "#E6E6FA", // digital lavender canvas
        charcoal: "#111820", // main text and structure
        navy: "#0D1520", // deep midnight surface
        ink: "#040404", // near-black

        // Boutique jade / teal scale.
        // Built around #01C8C4, with #00FFFF kept as the brighter digital highlight.
        teal: {
          900: "#003B3A", // deepest jade
          800: "#006B68", // dark jade teal
          700: "#009996", // strong jade teal
          600: "#01B8B3", // bright boutique teal
          500: "#01C8C4", // main brand jade
          400: "#00FFFF", // digital cyan highlight
        },

        // Accent system.
        gold: "#C8A24A", // boutique gold detail
        copper: "#B97D4B", // warm copper support
        "copper-dark": "#55370F",
        magenta: "#C01872", // controlled magenta accent
        fuchsia: "#FF00FF", // bright accent, use rarely

        // Neutral support.
        slate: "#374B55", // muted blue-grey body support
        glass: "#877D73", // soft grey support
        stone: "#E1CDC3", // warm stone support
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
        // Controlled gradients for media panels, overlays, ticker and CTA sections.
        "teal-primary":
          "linear-gradient(135deg, #003B3A 0%, #006B68 34%, #01B8B3 72%, #00FFFF 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #0D1520 42%, #003B3A 78%, #01C8C4 130%)",
        "gold-premium":
          "linear-gradient(120deg, #8A6B24 0%, #C8A24A 55%, #F1DFA7 100%)",
        "boutique-glow":
          "linear-gradient(135deg, #E6E6FA 0%, #D9FFFF 38%, #01C8C4 72%, #C01872 130%)",
        "magenta-teal":
          "linear-gradient(135deg, #C01872 0%, #6D2F68 38%, #006B68 72%, #01C8C4 100%)",
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
