import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

interface LogoProps {
  width: number;
  height: number;
}

export const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <Image
      src={logo}
      alt="Company Unixeven Logo"
      width={width}
      height={height}
      className={`block w-[${width}px] h-[${height}px]`}
    />
  );
};
