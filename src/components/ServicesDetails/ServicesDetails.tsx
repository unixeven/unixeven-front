import { Services } from '@/types/difinitions';
import { FC } from 'react';

interface ServicesDetailsProps {
  services: Services;
}

export const ServicesDetails: FC<ServicesDetailsProps> = ({ services }) => {
  return (
    <div className="size-full flex flex-col items-center gap-4 dark:text-lightWhite text-cobalt">
      <h2 className="uppercase font-montserrat text-[25px]/[40px] font-medium tracking-[0.5px]">
        {services.title}
      </h2>
      <p className="font-montserrat text-base font-normal tracking-[0.48px]">
        {services.content}
      </p>
    </div>
  );
};
