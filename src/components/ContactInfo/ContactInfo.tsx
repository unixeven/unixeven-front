import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { FooterTitle } from '../FooterTitle/FooterTitle';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6 self-start">
      <FooterTitle text="Contact us" />
      <address>
        <ul className="flex flex-col gap-2 text-lg/normal font-normal">
          <li className="flex items-center gap-2">
            <FiPhoneCall size={36} />
            <a href="tel:+380967845734" className="hover:text-gray-300">
              +380967845734
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FiMail size={36} />
            <a
              href="mailto:email458678@gmail.com"
              className="hover:text-gray-300"
            >
              email458678@gmail.com
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
};
