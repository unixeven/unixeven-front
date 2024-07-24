import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'cyan-light': '0 4px 6px rgba(2, 245, 238, 0.5)',
      },
      backgroundImage: {
        'workingProcess-bg': "url('/images/workingProcess-bg.png')",
        'workingProcess-bg-md': "url('/images/workingProcess-bg-md.png')",
        'workingProcess-bg-desk': "url('/images/workingProcess-bg-desk.png')",
        'contactUs-bg': "url('/images/contactUs-bg.webp')",
        'contactUs-bg-md': "url('/images/contactUs-bg-md.webp')",
        'contactUs-bg-desk': "url('/images/contactUs-bg-desk.webp')",
        'btn-background-color':
          'linear-gradient(to right, #035d95, #049bbe, #01c8ee)',
        modalWorkProcessBg: "url('/images/modalWorkProcessBg.png')",
        modalWorkProcessLightBg: "url('/images/modalWorkProcessLightBg.png')",
        'hero-bg-up': "url('/images/hero-bg-up.svg')",
        'hero-bg-down': "url('/images/hero-bg-down.svg')",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        dmSerif: ['"DM Serif Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      screens: {
        desk: '1440px',
      },
      colors: {
        lightBackground: '#ffffff',
        lightWhite: '#FAFAFA',
        blackMain: '#070707',
        pacificBlue: '#049BBE',
        aqua: '#02F5EE',
        cobalt: '#035D95',
        prussianBlue: '#00276B',
        gainsboro: '#DEDEDE',
      },
    },
  },

  plugins: [nextui()],
};
export default config;
