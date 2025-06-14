import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)'],
        playfair: ['var(--font-playfair)'],
        hanuman: ['var(--font-hanuman)'],
        manrope: ['var(--font-manrope)'],
        marck: ['var(--font-marck)'],
        lligat: ['var(--font-lligat)'],
        courgette: ['var(--font-courgette)'],
        medieval: ['var(--font-medieval)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: '#623B1C',
        secondary: '#744B28',
        accent: '#CDA582',
        dark: '#000000',
        light: '#FFFFFF',
        soft: {
          brown: '#4C3D31',
          rose: '#D9B79A',
          peach: '#FFE3CD',
          cream: '#F1E1C7',
          tan: '#937154',
        },
        plum: '#422A3C',
        mocha: '#4A3B30',
      },
    },
  },
  plugins: [],
}

export default config
