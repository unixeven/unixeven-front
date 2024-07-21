'use client';

import { FC, useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { NavBar } from '../NavBar/NavBar';
import { RxHamburgerMenu } from 'react-icons/rx';

interface BurgerMenuProps {
  nav: { name: string; id: string }[];
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.body;
    const newOverflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';

    body.style.overflow = newOverflow;
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="ml-3 md:ml-10">
      <RxHamburgerMenu size={40} onClick={toggleMenu} className="fill-" />

      {isOpen && (
        <div className="absolute top-24 left-0 z-40 min-h-screen min-w-full border-[2px] bg-black">
          <div className="flex flex-col items-center gap-20 mt-14 ">
            <NavBar nav={nav} />
          </div>
        </div>
      )}
    </div>
  );
};
