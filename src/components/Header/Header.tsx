import React from "react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="px-4 py-6 md:px-6 desk:px-24">
      <Logo width={82} height={73} />
    </header>
  );
};
