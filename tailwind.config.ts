import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-white": "4px 4px 10px 0px rgba(255, 255, 255, 0.70)",
        "custom-black": "4px 4px 10px 0px rgba(4, 155, 190, 0.20);",
      },
      backgroundImage: {
        "aboutUs-bg-md": "url('/images/aboutUsMd-bg.webp')",
        "aboutUs-bg-desk": "url('/images/aboutUsDesk-bg.webp')",
        "workingProcess-bg": "url('/images/workingProcess-bg.webp')",
        "workingProcess-bg-md": "url('/images/workingProcess-bg-md.webp')",
        "workingProcess-bg-desk": "url('/images/workingProcess-bg-desk.webp')",
        "contactUs-bg": "url('/images/contactUs-bg.webp')",
        "contactUs-bg-md": "url('/images/contactUs-bg-md.webp')",
        "contactUs-bg-desk": "url('/images/contactUs-bg-desk.webp')",
        "contactUs-light-bg": "url('/images/contactUs-light-bg.webp')",
        "contactUs-light-bg-md": "url('/images/contactUs-light-bg-md.webp')",
        "contactUs-light-bg-desk":
          "url('/images/contactUs-light-bg-desk.webp')",
        "btn-background-color":
          "linear-gradient(to right, #035d95, #049bbe, #01c8ee)",
        modalWorkProcessBg: "url('/images/modalWorkProcessBg.webp')",
        modalWorkProcessLightBg: "url('/images/modalWorkProcessLightBg.webp')",
        modalServicesBg: "url('/images/modalServicesBg.webp')",
        modalServicesBgMd: "url('/images/modalServicesBgMd.webp')",
        modalServicesBgDesk: "url('/images/modalServicesBgDesk.webp')",
        modalContactUsBg: "url('/images/modal-contactUs-bg.webp')",
        modalContactUsBgMd: "url('/images/modal-contactUs-bg-md.webp')",
        modalContactUsBgDesk: "url('/images/modal-contactUs-bg-desk.webp')",
        "hero-bg-up": "url('/images/hero-bg-up.svg')",
        "hero-bg-down": "url('/images/hero-bg-down.svg')",
        bg_OurTeam_mobile: "url(/images/bg_OurTeam_mobile.webp)",
        bg_OurTeam_tablet: "url(/images/bg_OurTeam_tablet.webp)",
        bg_OurTeam_desk: "url(/images/bg_OurTeam_desk.webp)",
        "ourServices-bg":
          "url('/images/ourServicesUp-bg.webp'),url('/images/ourServicesUp-bg.webp')",
        "ourServices-bg-md": "url('/images/ourServicesMd-bg.webp')",
        "ourServices-bg-desk": "url('/images/ourServicesDesk-bg.webp')",
        backgroundTeam:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.6) 100%)",
        "hero-bg-desk":
          "url('/images/heroLeft-bg-desk.webp'),url('/images/heroCentre-bg-desk.webp'),url('/images/heroRight-bg-desk.webp')",
        "hero-bg-md":
          "url('/images/heroLeft-bg-md.webp'),url('/images/heroCentre-bg-desk.webp'),url('/images/heroRight-bg-md.webp')",
        "hero-bg-mob":
          "url('/images/heroLeft-bg-mob.webp'),url('/images/heroCentre-bg-mob.webp'),url('/images/heroRight-bg-mob.webp')",
        "our-clients-mobile": "url('/images/our-clients/bg-mobile.png')",
        "our-clients-tablet": "url('/images/our-clients/bg-tablet.png')",
        "our-clients-desktop": "url('/images/our-clients/bg-desktop.png')",
      },
      backgroundPosition: {
        ourServicesPosition: "center 21px, center calc(100% - 12px)",
        heroPositionDesk: "left bottom,center ,right bottom",
        heroPositionMd: "left bottom,center,right center",
        heroPositionMob: "left  top 7rem,center,right bottom",
      },
      backgroundSize: {
        "hero-bg-desk-size": "20% 50%, 95% 95%, 45% 95%",
        "hero-bg-md-size": "28% 49%, 95% 95%, 55% 80%",
        "hero-bg-mob-size": "37% 43%, 95% 95%, 63% 49%",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        dmSerif: ['"DM Serif Display"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        cinzelDecorative: ['"Cinzel Decorative"', "serif"],
      },
      screens: {
        desk: "1440px",
      },
      colors: {
        lightBackground: "#ffffff",
        lightWhite: "#FAFAFA",
        blackMain: "#070707",
        pacificBlue: "#049BBE",
        aqua: "#02F5EE",
        cobalt: "#035D95",
        prussianBlue: "#00276B",
        gainsboro: "#DEDEDE",
        tundora: "#5C5C5C",
      },
    },
  },

  plugins: [nextui()],
};
export default config;
