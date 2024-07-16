import React, { FC } from 'react';

interface TitleSectionsProps {
  text: string;
}

export const TitleSections: FC<TitleSectionsProps> = ({ text }) => {
  return (
    <h2 className="title-section gradient-text relative w-full  text-4xl tracking-[0.5px] font-normal ">
      {text}
    </h2>
  );
};
