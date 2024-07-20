import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'workingProcess-bg': "url('/images/workingProcess-bg.png')",
        'workingProcess-bg-md': "url('/images/workingProcess-bg-md.png')",
        'workingProcess-bg-desk': "url('/images/workingProcess-bg-desk.png')",
        'btn-background-color': "linear-gradient(to right, #035d95, #049bbe, #01c8ee)",
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
        lightWhite: '#FAFAFA',
        blackMain: '#070707',
        pacificBlue: '#049BBE',
        aqua: '#02F5EE',
        cobalt: '#035D95',
        prussianBlue: '#00276B',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
