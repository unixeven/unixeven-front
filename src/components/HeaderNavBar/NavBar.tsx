'use client';

import { FC, KeyboardEvent } from 'react';
import { Link } from 'react-scroll';

interface NavBarProps {
  nav: { name: string; id: string }[];
  toggleMenu?: () => void;
}

export const NavBar: FC<NavBarProps> = ({ nav, toggleMenu }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <ul className="flex flex-col gap-10 xl:flex-row items-center justify-center">
      {nav.map(({ name, id }) => (
        <li key={id}>
          <Link
            onClick={toggleMenu}
            to={id}
            offset={-50}
            smooth={true}
            duration={500}
            className="nav outline-0 transition-colors duration-300 ease-in-out text-2xl/normal dark:text-lightWhite hover:text-cobalt focus:text-cobalt dark:hover:text-pacificBlue dark:focus:text-pacificBlue text-prussianBlue text-center font-montserrat font-medium cursor-pointer"
            aria-label={`Scroll to ${name}`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
