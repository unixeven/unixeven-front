import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

export const Logo: FC = () => {
  return (
    <Image
      src={logo}
      alt="Company Unixeven Logo"
      width={243}
      height={173}
      className="w-[243px] h-[173px]"
    />
  );
};
