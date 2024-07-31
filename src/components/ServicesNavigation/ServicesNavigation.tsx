'use client';

import { FooterTitle } from '../FooterTitle/FooterTitle';
import { Link } from 'react-scroll';
import { FC } from 'react';
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

  return (
    <div className="flex flex-col gap-6">
      <FooterTitle text={footer.title.services} />
      <nav className="">
        <ul className="flex flex-col gap-4">
          {footer.servicesList.map((item, index) => (
            <li key={index} className="text-lg/normal font-normal">
              <Link
                to={`service-button-${index}`}
                spy={true}
                smooth={true}
                duration={800}
                offset={index === 3 || index === 4 ? -550 : -300}
                onSetActive={handleSetActive}
                className="transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none cursor-pointer"
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
