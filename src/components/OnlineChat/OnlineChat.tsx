import React from 'react';
import { FaTelegramPlane, FaViber } from 'react-icons/fa';
import { FooterTitle } from '../FooterTitle/FooterTitle';

export const OnlineChat = () => {
  return (
    <div className="flex flex-col gap-6">
      <FooterTitle text="Online chat" />
      <ul className="flex flex-col gap-2 text-lg font-normal">
        <li className="flex items-center gap-2">
          <a
            href="https://t.me/yourUsername"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Chat on Telegram"
          >
            <FaTelegramPlane size={36} />
            Telegram
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="viber://chat?number=+YourNumber"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Chat on Viber"
          >
            <FaViber size={36} />
            Viber
          </a>
        </li>
      </ul>
    </div>
  );
};
