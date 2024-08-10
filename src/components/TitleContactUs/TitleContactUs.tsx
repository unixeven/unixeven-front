import { FC } from 'react';

interface TitleContactUsProps {
  text: string;
  spanText: string;
}

export const TitleContactUs: FC<TitleContactUsProps> = ({ text, spanText }) => {
  const parts = text.split(spanText);

  return (
    <h3
      id="section-contact-us"
      className="text-center text-cobalt dark:text-lightWhite font-dmSerif w-[328px] md:w-[696px] desk:w-full text-[64px]/[96px] font-normal tracking-[0.5px] uppercase"
    >
      {parts[0]} <span className="text-pacificBlue italic">{spanText}</span>{' '}
      {parts[1]}
    </h3>
  );
};
