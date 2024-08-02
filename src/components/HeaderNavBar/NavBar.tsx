'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';

interface NavBarProps {
  nav: { name: string; id: string }[];
  toggleMenu?: () => void;
}

export const NavBar: FC<NavBarProps> = ({ nav, toggleMenu }) => {
  return (
    <ul className="flex flex-col gap-10 xl:flex-row items-center justify-center">
      {nav.map(({ name, id }) => {
        return (
          <li key={id} tabIndex={0}>
            <Link
              onClick={toggleMenu}
              to={id}
              offset={-50}
              smooth={true}
              duration={500}
              className="nav text-2xl/normal dark:text-lightWhite hover:text-cobalt focus:text-cobalt dark:hover:text-pacificBlue dark:focus:text-pacificBlue text-prussianBlue text-center font-montserrat font-medium cursor-pointer"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
