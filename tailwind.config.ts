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
        cobalt: '#035D95',
        prussianBlue: '#00276B',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
