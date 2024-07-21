import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { FooterTitle } from '../FooterTitle/FooterTitle';

export const ContactInfo = () => {
  return (
    <address className="flex flex-col gap-6">
      <FooterTitle text="Contact us" />
      <ul className="flex flex-col gap-2 text-lg font-normal">
        <li className="flex items-center gap-2">
          <a
            href="tel:+380967845734"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Call us at +380967845734"
          >
            <FiPhoneCall size={36} />
            +380967845734
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="mailto:email458678@gmail.com"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Email us at email458678@gmail.com"
          >
            <FiMail size={36} />
            email458678@gmail.com
          </a>
        </li>
      </ul>
    </address>
  );
};
