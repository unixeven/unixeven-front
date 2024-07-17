import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

export const Logo: FC = () => {
  return (
    <div className=" hidden logo-container md:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        src={logo}
        alt="Company Unixeven Logo"
        width={243}
        height={173}
        className="w-[243px] h-[173px]"
      />
    </div>
  );
};
