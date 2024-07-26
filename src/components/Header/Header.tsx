import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { LanguageSwitcher } from '../HeaderLanguageSwitcher/LanguageSwitcher';
import { NavBar } from '../HeaderNavBar/NavBar';
import { BurgerMenu } from '../HeaderBurgerMenu/BurgerMenu';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

interface HeaderProps {
  nav: { name: string; id: string }[];
}

export const Header: FC<HeaderProps> = ({ nav }) => {
  return (
    <header className="px-4 py-6 md:px-6 desk:px-24 flex items-center justify-between">
      <Logo width={82} height={73} />
      <div className="hidden xl:block">
        <NavBar nav={nav} />
      </div>
      <div className="flex items-center justify-around gap-3">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <BurgerMenu nav={nav} />
      </div>
    </header>
  );
};
