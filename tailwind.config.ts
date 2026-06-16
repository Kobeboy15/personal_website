import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/three/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial / Swiss light palette
        paper: "#F4F2ED", // warm off-white background
        "paper-dim": "#EAE7DF", // raised surfaces / hairline fills
        ink: "#17160F", // near-black primary text
        "ink-soft": "#54514A", // secondary text
        "ink-mute": "#908C82", // meta / captions
        line: "#D8D4CA", // hairline borders
        accent: "#1F44FF", // single confident accent (electric cobalt)
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        grid: "84rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
