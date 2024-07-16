import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-screen-desk mx-auto px-4 md:px-6 desk:px-24">
      {children}
    </div>
  );
};
