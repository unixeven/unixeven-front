import { FC } from 'react';

import { Service } from '@/types/definitions';

interface ServicesDetailsProps {
  service: Service;
}

export const ServicesDetails: FC<ServicesDetailsProps> = ({ service }) => {
  return (
    <div className="size-full flex flex-col items-center gap-4 md:gap-6 desk:gap-10 dark:text-lightWhite text-cobalt">
      <h2 className="uppercase font-montserrat text-[25px]/[40px] font-medium tracking-[0.5px]">
        {service.title}
      </h2>
      <p className="font-montserrat text-base font-normal tracking-[0.48px] md:text-2xl/9 md:tracking-[0.5px]">
        {service.content}
      </p>
    </div>
  );
};
