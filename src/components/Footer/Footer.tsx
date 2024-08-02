import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { ServicesNavigation } from '../ServicesNavigation/ServicesNavigation';
import { OnlineChat } from '../OnlineChat/OnlineChat';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { FooterData } from '@/types/difinitions';

interface FooterProps {
  footer: FooterData;
}

export const Footer: FC<FooterProps> = ({ footer }) => {
  return (
    <footer className="px-12 py-16 md:px-6 md:py-20 desk:px-24 desk:py-[88px] flex flex-col justify-start lg:flex-row items-center lg:items-start gap-14 lg:gap-32 xl:gap-48 desk:gap-[236px] font-montserrat dark:text-lightWhite text-prussianBlue">
      <Logo width={82} />
      <div className="w-full flex-col gap-14 md:gap-0 md:justify-between flex justify-center items-start md:flex-row">
        <ServicesNavigation footer={footer} />
        <OnlineChat footer={footer} />
        <ContactInfo footer={footer} />
      </div>
    </footer>
  );
};
