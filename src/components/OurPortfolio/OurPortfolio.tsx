import { FC } from 'react';
import { Slider } from '../OurPortfolioSlider/OurPortfolioSlider';
import { TitleSections } from '../TitleSection/TitleSection';
import { Portfolio } from './../../types/difinitions';

interface OurPortfolioProps {
  portfolio: Portfolio;
}

export const OurPortfolio: FC<OurPortfolioProps> = ({ portfolio }) => {
  return (
    <section
      aria-labelledby={portfolio.title}
      className="w-full flex flex-col items-center gap-14 desk:gap-16 h-max py-16  px-4 md:px-6 md:py-20 desk:py-[88px] desk:px-24"
    >
      <TitleSections text={portfolio.title} id={portfolio.title} />
      <Slider slides={portfolio.slides} />
    </section>
  );
};
