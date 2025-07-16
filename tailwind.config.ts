import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: "rgb(0, 255, 0)",
          blue: "rgb(0, 150, 255)",
          yellow: "rgb(255, 255, 0)",
          red: "rgb(255, 0, 0)",
          purple: "rgb(255, 0, 255)",
          cyan: "rgb(0, 255, 255)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "cursor-blink": "blink 1s infinite",
        "typewriter": "typing 3s steps(40, end), blink-caret 0.75s step-end infinite",
        "fade-in": "fadeIn 0.5s ease-in",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "rgb(0, 255, 0)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
