import services from '../../data/ourServices.json';

import Link from 'next/link';
import { FooterTitle } from '../FooterTitle/FooterTitle';

export const ServicesNavigation = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <FooterTitle text="Services" />
      <nav className="">
        <ul className="flex flex-col gap-4">
          {services.map(service => (
            <li key={service.id} className="text-lg/normal font-normal">
              <Link
                href="#"
                className="transition-colors duration-300 dark:hover:text-pacificBlue hover:text-lightWhite"
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
