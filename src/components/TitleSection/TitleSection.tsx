import React, { FC, RefObject } from 'react';

interface TitleSectionsProps {
  text: string;
  id: string;
  titleRef?: RefObject<HTMLHeadingElement>;
}

export const TitleSections: FC<TitleSectionsProps> = ({
  text,
  id,
  titleRef,
}) => {
  return (
    <h2
      ref={titleRef}
      className="title-section text-nowrap gradient-text relative w-full text-center md:text-left font-dmSerif text-4xl tracking-[0.5px] font-normal md:pl-[106px] uppercase"
      id={id}
      aria-label={text}
    >
      {text}
    </h2>
  );
};
