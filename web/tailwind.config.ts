import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        kufi: ["var(--font-kufi)", ...fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: "#00bbff",
          foreground: "#0B1E3F"
        },
        darkBlue: "#0B1E3F",
        lightGray: "#f4f5f7"
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, rgba(0,187,255,0.85) 0%, rgba(11,30,63,0.85) 100%)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0, 187, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
