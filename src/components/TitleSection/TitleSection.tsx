import React, { FC } from 'react';

interface TitleSectionsProps {
  text: string;
  id: string;
}

export const TitleSections: FC<TitleSectionsProps> = ({ text, id }) => {
  return (
    <h2
      className="title-section gradient-text relative w-full text-center md:text-left font-dmSerif text-4xl tracking-[0.5px] font-normal md:pl-[106px] uppercase"
      id={id}
    >
      {text}
    </h2>
  );
};
