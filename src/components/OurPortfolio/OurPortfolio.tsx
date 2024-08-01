import { Slider } from '../OurPortfolioSlider/OurPortfolioSlider';
import { TitleSections } from '../TitleSection/TitleSection';

export const OurPortfolio = () => {
  return (
    <section
      aria-labelledby="our-portfolio-title"
      className="w-full flex flex-col items-center gap-14 desk:gap-16 h-max py-16  px-4 md:px-6 md:py-20 desk:py-[88px] desk:px-24"
    >
      <TitleSections text="our portfolio" id="our-portfolio-title" />
      <Slider />
    </section>
  );
};
