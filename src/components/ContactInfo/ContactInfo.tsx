import React, { FC } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import { FooterTitle } from '../FooterTitle/FooterTitle';

import { FooterData } from '@/types/definitions';

export interface ContactInfoProps {
  footer: FooterData;
}

export const ContactInfo: FC<ContactInfoProps> = ({ footer }) => {
  const { title, contactUs } = footer;
  const { phone, email } = contactUs;

  return (
    <address className="flex flex-col gap-6">
      <FooterTitle text={title.contactUs} />
      <ul className="flex flex-col gap-2 text-lg font-normal">
        <li className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label={`Call us at ${phone}`}
          >
            <FiPhoneCall size={36} />
            {phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label={`Email us at ${email}`}
          >
            <FiMail size={36} />
            {email}
          </a>
        </li>
      </ul>
    </address>
  );
};
