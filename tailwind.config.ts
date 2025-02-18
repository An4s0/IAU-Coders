import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|input|input-otp|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [heroui()],
  darkMode: "class",
} satisfies Config;
