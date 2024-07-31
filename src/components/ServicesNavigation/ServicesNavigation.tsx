'use client';

import services from '../../data/ourServices.json';
import Link from 'next/link';
import { FooterTitle } from '../FooterTitle/FooterTitle';
import { scroller } from 'react-scroll';
import { FC } from 'react';

export const ServicesNavigation: FC = () => {
  const handleScrollToServices = (index: number) => {
    const offset = index === 3 || index === 4 ? -550 : -300;

    scroller.scrollTo(`service-button-${index}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset,
    });

    const button = document.getElementById(
      `service-button-${index}`
    ) as HTMLButtonElement;
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
                href={`#service-button-${index}`}
                onClick={e => {
                  e.preventDefault();
                  handleScrollToServices(index);
                }}
                className="transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite focus:text-lightWhite dark:focus:text-pacificBlue focus:outline-none"
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
