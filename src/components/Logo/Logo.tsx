import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

export const Logo: FC = () => {
  return (
    <Image
      src={logo}
      alt="Company Unixeven Logo"
      width={204}
      height={173}
      className="w-[204px] h-[173px]"
    />
  );
};
