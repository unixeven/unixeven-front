import React from 'react';
import { Logo } from '../Logo/Logo';
import { ServicesNavigation } from '../ServicesNavigation/ServicesNavigation';
import { OnlineChat } from '../OnlineChat/OnlineChat';
import { ContactInfo } from '../ContactInfo/ContactInfo';

export const Footer = () => {
  return (
    <footer className="px-12 py-16 flex flex-col justify-start items-center gap-14 font-montserrat dark:text-lightWhite text-prussianBlue">
      <Logo width={82} height={73} />
      <ServicesNavigation />
      <OnlineChat />
      <ContactInfo />
    </footer>
  );
};
