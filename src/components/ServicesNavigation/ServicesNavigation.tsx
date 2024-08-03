'use client';

import { Link } from 'react-scroll';
import { FC, KeyboardEvent } from 'react';

import { FooterTitle } from '../FooterTitle/FooterTitle';

import { FooterData } from '@/types/difinitions';

interface ServicesNavigationProps {
  footer: FooterData;
}

export const ServicesNavigation: FC<ServicesNavigationProps> = ({ footer }) => {
  const handleSetActive = (to: string) => {
    const button = document.getElementById(to) as HTMLButtonElement;
    if (button) {
      button.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <FooterTitle text={footer.title.services} />
      <nav className="">
        <ul className="flex flex-col gap-4">
          {footer.servicesList.map((item, index) => (
            <li key={item} className="text-lg/normal font-normal">
              <Link
                to={`service-button-${index}`}
                spy={true}
                smooth={true}
                duration={800}
                offset={index === 3 || index === 4 ? -550 : -300}
                onSetActive={handleSetActive}
                aria-label={`Scroll to ${item}`}
                tabIndex={0}
                className="transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none cursor-pointer"
                onKeyDown={handleKeyDown}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
