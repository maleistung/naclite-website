import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        bone: "#F3F1EB",
        "bone-2": "#E9E6DD",
        carbon: "#141414",
        "carbon-2": "#1F1F1F",
        ink: "#171717",
        "ink-mute": "#6A6A66",
        line: "#E2DFD6",
        "line-dark": "#2C2C2C",
        ember: "#E8552B",
        "ember-deep": "#C7431D",
        "ember-soft": "#FFD9CC",
        salt: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3rem, 8.2vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(2.4rem, 5.2vw, 4.5rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.9rem, 3.8vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.4rem, 2.4vw, 1.85rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      maxWidth: { shell: "1140px", wide: "1400px" },
      borderRadius: { "4xl": "1.75rem", "5xl": "2.5rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 40s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
