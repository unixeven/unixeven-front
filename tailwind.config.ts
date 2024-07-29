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
        'custom-white': '4px 4px 10px 0px rgba(255, 255, 255, 0.70)',
        'custom-black': '4px 4px 10px 0px rgba(4, 155, 190, 0.20);',
      },
      backgroundImage: {
        'aboutUs-bg-md': "url('/images/aboutUsMd-bg.png')",
        'aboutUs-bg-desk': "url('/images/aboutUsDesk-bg.png')",
        'workingProcess-bg': "url('/images/workingProcess-bg.png')",
        'workingProcess-bg-md': "url('/images/workingProcess-bg-md.png')",
        'workingProcess-bg-desk': "url('/images/workingProcess-bg-desk.png')",
        'btn-background-color':
          'linear-gradient(to right, #035d95, #049bbe, #01c8ee)',
        modalWorkProcessBg: "url('/images/modalWorkProcessBg.png')",
        modalWorkProcessLightBg: "url('/images/modalWorkProcessLightBg.png')",
        modalServicesBg: "url('/images/modalServicesBg.png')",
        modalServicesBgMd: "url('/images/modalServicesBgMd.png')",
        modalServicesBgDesk: "url('/images/modalServicesBgDesk.png')",
        bg_OurTeam_mobile: 'url(/images/bg_OurTeam_mobile.png)',
        bg_OurTeam_tablet: 'url(/images/bg_OurTeam_tablet.png)',
        bg_OurTeam_desk: 'url(/images/bg_OurTeam_desk.png)',
        'ourServices-bg':
          "url('/images/ourServicesUp-bg.png'),url('/images/ourServicesUp-bg.png')",
        'ourServices-bg-md': "url('/images/ourServicesMd-bg.png')",
        'ourServices-bg-desk': "url('/images/ourServicesDesk-bg.png')",
        backgroundTeam:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.6) 100%)',
        'hero-bg-desk':
          "url('/images/heroLeft-bg-desk.svg'),url('/images/heroRight-bg-desk.svg')",
      },
      backgroundPosition: {
        ourServicesPosition: 'center 21px, center calc(100% - 12px)',
        heroPosition: 'left bottom,right bottom',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        dmSerif: ['"DM Serif Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        cinzelDecorative: ['"Cinzel Decorative"', 'serif'],
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
