import React, { FC } from 'react';
import { FaTelegramPlane, FaViber } from 'react-icons/fa';
import { FooterTitle } from '../FooterTitle/FooterTitle';
import { FooterData } from '@/types/difinitions';

interface OnlineChatProps {
  footer: FooterData;
}

export const OnlineChat: FC<OnlineChatProps> = ({ footer }) => {
  const { title, onlineChat } = footer;
  return (
    <div className="flex flex-col gap-6">
      <FooterTitle text={title.onlineChat} />
      <ul className="flex flex-col gap-2 text-lg font-normal">
        <li className="flex items-center gap-2">
          <a
            href="https://t.me/yourUsername"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Chat on Telegram"
          >
            <FaTelegramPlane size={36} />
            {onlineChat.telegram}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="viber://chat?number=+YourNumber"
            className="flex items-center gap-2 transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
            aria-label="Chat on Viber"
          >
            <FaViber size={36} />
            {onlineChat.viber}
          </a>
        </li>
      </ul>
    </div>
  );
};
