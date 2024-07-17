import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/icons/logo.svg';

export const Logo: FC = () => {
  return (
    <div className=" hidden logo-container md:flex items-center justify-center">
      <Image src={logo} alt="Company Logo" width={243} height={173} />
    </div>
  );
};
