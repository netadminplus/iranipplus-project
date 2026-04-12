import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary Farsi font — loaded via @font-face in globals.css
        sans: ["Vazirmatn", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f4fe",
          100: "#dde6fd",
          200: "#c2d2fb",
          300: "#98b5f8",
          400: "#678ef4",
          500: "#4166ef",
          600: "#2b49e4",
          700: "#2338d1",
          800: "#2130a9",
          900: "#202e85",
          950: "#171e51",
        },
        surface: {
          DEFAULT: "#0f1117",
          muted:   "#1a1d2e",
          card:    "#1e2235",
        },
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
