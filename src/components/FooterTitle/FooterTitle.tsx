import React, { FC } from 'react';

interface FooterTitleProps {
  text: React.ReactNode;
}

export const FooterTitle: FC<FooterTitleProps> = ({ text }) => {
  return (
    <h2 className="font-montserrat font-semibold text-2xl/normal">{text}</h2>
  );
};
