import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-desk mx-auto ">{children}</div>;
};
