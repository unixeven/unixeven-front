import React from 'react';
import { TitleSections } from '../TitleSection/TitleSection';
import { OurServicesList } from '../OurServicesList/OurServicesList';

export const OurServices = () => {
  return (
    <section className="flex flex-col items-center gap-14 md:gap-[71px] desk:gap-16 w-full px-4 py-16 md:px-[113px] md:py-20 desk:px-24 desk:py-[88px] bg-ourServices-bg md:bg-ourServices-bg-md desk:bg-ourServices-bg-desk bg-contain bg-ourServicesPosition md:bg-[center_bottom_4rem] desk:bg-bottom  bg-no-repeat">
      <TitleSections text="Our Services" id="Our Services" />
      <OurServicesList />
    </section>
  );
};
