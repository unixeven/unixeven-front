import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

interface LogoProps {
  width: number;
}

export const Logo: FC<LogoProps> = ({ width }) => {
  return (
    <Image
      src={logo}
      alt="Company Unixeven Logo"
      width={width}
      className={`block ]`}
    />
  );
};
