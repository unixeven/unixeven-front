import React, { FC } from 'react';

interface TitleSectionsProps {
  text: string;
}

export const TitleSections: FC<TitleSectionsProps> = ({ text }) => {
  return (
    <h2 className="title-section gradient-text relative  w-full text-center md:text-left font-dmSerif text-4xl tracking-[0.5px] font-normal md:pl-[106px] uppercase ">
      {text}
    </h2>
  );
};
