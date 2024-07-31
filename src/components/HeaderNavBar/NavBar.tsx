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
          <li key={id}>
            <Link
              onClick={toggleMenu}
              to={id}
              offset={-50}
              smooth={true}
              duration={500}
              className="block text-2xl/normal dark:text-lightWhite text-prussianBlue text-center font-montserrat font-medium cursor-pointer"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
