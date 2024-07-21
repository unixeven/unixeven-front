import React from 'react';
import { Logo } from '../Logo/Logo';
import { ServicesNavigation } from '../ServicesNavigation/ServicesNavigation';
import { OnlineChat } from '../OnlineChat/OnlineChat';
import { ContactInfo } from '../ContactInfo/ContactInfo';

export const Footer = () => {
  return (
    <footer className="px-12 py-16 md:px-6 md:py-20 desk:px-24 desk:py-[88px] flex flex-col justify-start md:flex-row items-center desk:items-start gap-14 desk:gap-[236px] font-montserrat dark:text-lightWhite text-prussianBlue">
      <Logo width={82} height={73} />
      <div className="w-full flex flex-col gap-14 md:gap-0 md:justify-between flex flex-col justify-center items-start md:flex-row">
        <ServicesNavigation />
        <OnlineChat />
        <ContactInfo />
      </div>
    </footer>
  );
};
