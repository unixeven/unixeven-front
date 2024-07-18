import React, { FC } from 'react';

import { Logo } from '../Logo/Logo';

export const WorkingLogo: FC = () => {
  return (
    <div className="xl:transform xl:rotate-90 xl:origin-center  hidden logo-container md:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Logo />
    </div>
  );
};
