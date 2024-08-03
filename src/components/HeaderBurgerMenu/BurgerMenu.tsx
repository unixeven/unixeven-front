'use client';

import { FC, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import { NavBar } from '../HeaderNavBar/NavBar';

interface BurgerMenuProps {
  nav: { name: string; id: string }[];
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.body;
    const newOverflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';

    body.style.overflow = newOverflow;
    setIsOpen(prev => !prev);
  };

  return (
    <div className="block xl:hidden">
      <button
        type="button"
        className="burger-icon"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="navbar"
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>

      {isOpen && (
        <dialog
          open
          className="absolute top-0 left-0 z-40 min-h-screen min-w-full dark:bg-blackMain bg-gainsboro"
        >
          <RxCross1
            size={40}
            onClick={toggleMenu}
            className="absolute top-10 right-4 dark:text-lightWhite text-prussianBlue"
            aria-label="Close menu"
          />
          <nav
            role="navigation"
            className="flex flex-col items-center gap-20 mt-[215px]"
          >
            <NavBar nav={nav} toggleMenu={toggleMenu} />
          </nav>
        </dialog>
      )}
    </div>
  );
};
