import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        darkest: '#623B1C',
        primary: '#744B28',
        secondary: '#422A3C',
        tertiary: '#4A3B30',

        // Accent
        accent: '#43CD31',

        // Neutrals / Browns
        light: '#CDA582',
        medium: '#937154',
        dark: '#936C4B',
        tan: '#D9B79A',

        // Light Tones
        cream: '#F1E1C7',
        peach: '#FFE3CB',
        ivory: '#FFEFD6',
      },
    },
  },
  plugins: [],
};

export default config;