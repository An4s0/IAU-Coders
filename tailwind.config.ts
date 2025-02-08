import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(input|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00ffc4",
        secondary: "#008768",
        tertiary: "#02a17c",
      },
    },
  },
  plugins: [heroui()],
  class: 'dark'
} satisfies Config;
