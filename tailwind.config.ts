import type { Config } from "tailwindcss";

/**
 * Chapeau design tokens.
 * Tight palette for this pass: white/lavender, charcoal, teal and fuchsia/magenta.
 * Gold/copper tokens are retained for compatibility, but mapped into the fuchsia/magenta range.
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
        lavender: "#E6E6FA",

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

        fuchsia: "#FF00FF",
        magenta: "#C01872",

        // Compatibility tokens. Existing components may still reference these names.
        gold: "#FF00FF",
        copper: "#C01872",
        "copper-dark": "#7A104D",

        slate: "#203943",
        glass: "#203943",
        stone: "#E6E6FA",

        // Framer "Echo" palette — used by the redesigned sections.
        framer: {
          ink: "#181A1A", // hero headline, dark buttons
          graphite: "#232323", // body text, Enterprise card
          mute: "#666666", // subtitles
          lavender: "#E1C1FF", // pastel accent panel / highlight
          sky: "#8FCDFF", // pastel accent panel
          card: "#F7F7F7", // light "Pro" card
          wash: "#FAFAFA", // inner card surface
          panel: "#EDECEB", // pricing section base
          panel2: "#EDEDED", // pricing gradient stop
          hair: "#A9A9A9", // texture lines
          feat: "#383838", // feature list text
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        headline: ["var(--font-headline)", "var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "var(--font-headline)", "sans-serif"],
        // `condensed` kept as an alias of display so existing usages keep working.
        condensed: ["var(--font-display)", "var(--font-headline)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.1em",
        display: "-0.018em",
      },
      maxWidth: {
        shell: "1280px",
      },
      backgroundImage: {
        "teal-primary":
          "linear-gradient(135deg, #003333 0%, #005C5C 28%, #00C7C7 68%, #00FFFF 100%)",
        "teal-dark":
          "linear-gradient(140deg, #040404 0%, #071115 36%, #003333 70%, #00FFFF 128%)",
        "fuchsia-primary":
          "linear-gradient(135deg, #7A104D 0%, #C01872 42%, #FF00FF 100%)",
        "magenta-teal":
          "linear-gradient(135deg, #FF00FF 0%, #C01872 32%, #005C5C 70%, #00FFFF 100%)",
        "boutique-glow":
          "linear-gradient(135deg, #00FFFF 0%, #00C7C7 34%, #FF00FF 72%, #C01872 128%)",
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
