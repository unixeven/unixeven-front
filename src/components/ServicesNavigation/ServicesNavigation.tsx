'use client';

import services from '../../data/ourServices.json';
import { FooterTitle } from '../FooterTitle/FooterTitle';
import { Link } from 'react-scroll';
import { FC } from 'react';

export const ServicesNavigation: FC = () => {
  const handleSetActive = (to: string) => {
    const button = document.getElementById(to) as HTMLButtonElement;
    if (button) {
      button.focus();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <FooterTitle text="Services" />
      <nav className="">
        <ul className="flex flex-col gap-4">
          {services.map((service, index) => (
            <li key={service.id} className="text-lg/normal font-normal">
              <Link
                to={`service-button-${index}`}
                spy={true}
                smooth={true}
                duration={800}
                offset={index === 3 || index === 4 ? -550 : -300}
                onSetActive={handleSetActive}
                className="transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none cursor-pointer"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
