import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { LanguageSwitcher } from '../HeaderLanguageSwitcher/LanguageSwitcher';
import { NavBar } from '../NavBar/NavBar';
import { BurgerMenu } from '../HeaderBurgerMenu/BurgerMenu';

interface HeaderProps {
  nav: { name: string; id: string }[];
}

export const Header: FC<HeaderProps> = ({ nav }) => {
  return (
    <header className="px-4 py-6 md:px-6 desk:px-24 flex items-center gap-2">
      <Logo width={82} height={73} />
      <NavBar nav={nav} />
      <LanguageSwitcher />
      <BurgerMenu nav={nav} />
    </header>
  );
};
