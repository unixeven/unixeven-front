import { FC } from 'react';
import Image from 'next/image';

import aboutUs_1 from '../../../public/images/aboutUs_1.webp';
import aboutUs_2 from '../../../public/images/aboutUs_2.webp';
import aboutUs_3 from '../../../public/images/aboutUs_3.webp';
import aboutUs_4 from '../../../public/images/aboutUs_4.webp';

import { TitleSections } from '../TitleSection/TitleSection';

import { AboutUsSection } from '@/types/difinitions';

interface AboutUsProps {
  aboutUs: AboutUsSection;
}

export const AboutUs: FC<AboutUsProps> = ({ aboutUs }) => {
  const { title, text_1, text_2 } = aboutUs;
  return (
    <section
      aria-labelledby={title}
      className="flex flex-col item gap-14 desk:gap-16 md:bg-aboutUs-bg-md md:!bg-[length:396px_455px] desk:bg-aboutUs-bg-desk desk:!bg-[length:404px_503px] bg-no-repeat bg-right-top  w-full px-4 md:px-6 desk:px-24 py-16 md:py-20 desk:py-[88px]"
    >
      <TitleSections text={title} id={title} />
      <div className="w-full flex flex-col desk:flex-row gap-12 md:gap-8 desk:gap-6">
        <div className="relative flex gap-4 md:gap-[26px] desk:gap-6 w-full desk:w-max z-10 justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-full flex flex-col justify-between items-center z-[-1] py-[22px] md:py-11 desk:py-10"
          >
            <div className="img-border w-[72px] md:w-[148px] desk:w-[128px] h-11 md:h-[85px] desk:h-[76px]"></div>
            <div className="img-border w-[72px] md:w-[148px] desk:w-[128px] h-11 md:h-[85px] desk:h-[76px]"></div>
          </div>

          <div className="flex flex-col gap-[14px] md:gap-[24px] desk:gap-6">
            <Image
              src={aboutUs_1}
              alt="Person explaining a diagram on a whiteboard to colleagues"
              sizes="(max-width: 767px) 171px, (max-width: 1023px) 340px, 294px"
              className="rounded-tl-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
            />
            <Image
              src={aboutUs_2}
              alt="Group of people working together at a table with laptops"
              className="rounded-bl-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
              sizes="(max-width: 767px) 171px, (max-width: 1023px) 340px, 294px"
            />
          </div>
          <div className="flex flex-col gap-[14px] md:gap-[24px] desk:gap-6 pt-[38px] md:pt-[73px] desk:pt-16">
            <Image
              src={aboutUs_3}
              alt="Computer screen displaying code"
              sizes="(max-width: 767px) 171px, (max-width: 1023px) 340px, 294px"
              className="rounded-tr-[43px]  w-[171px] md:w-[340px] desk:w-[294px]"
            />
            <Image
              src={aboutUs_4}
              alt="Laptop on a desk with a chair beside it"
              sizes="(max-width: 767px) 171px, (max-width: 1023px) 340px, 294px"
              className="rounded-br-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
            />
          </div>
        </div>
        <div className="desk:w-1/2 flex flex-col justify-center items-center gap-6 font-montserrat text-2xl/9 font-normal tracking-[0.5px]  dark:text-lightWhite text-prussianBlue">
          <p>{text_1}</p>
          <p>{text_2}</p>
        </div>
      </div>
    </section>
  );
};
