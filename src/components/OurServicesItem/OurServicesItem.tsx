import { FC, KeyboardEvent } from 'react';

import { Service } from '@/types/definitions';

interface OurServicesItemProps {
  service: Service;
  index: number;
  handleOpenModal: (service: Service) => void;
}

export const OurServicesItem: FC<OurServicesItemProps> = ({
  service,
  index,
  handleOpenModal,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOpenModal(service);
    }
  };

  return (
    <li
      key={service.id}
      className="w-full desk:w-[calc((100%-2*24px)/3)] gradient-border dark:border-0 border-2 border-cobalt relative px-6 pb-6 pt-[46px] md:px-10 md:pt-[109px] md:pb-10 desk:px-6 desk:pt-[46px] desk:pb-6 flex flex-col items-center justify-center gap-4 !rounded-[32px] before:!rounded-[32px] transition-all duration-300 hover:border-pacificBlue hover:shadow-custom-black"
    >
      <h3 className="uppercase text-center font-montserrat text-xl md:text-2xl font-medium tracking-[0.5px] dark:text-lightWhite text-prussianBlue">
        {service.title}
      </h3>

      <svg aria-hidden="true" className="w-20 h-12">
        <use
          href={`/icons/sprite.svg#icon-${service.icon}`}
          className="size-full fill-prussianBlue dark:fill-lightWhite"
        />
      </svg>
      <button
        id={`service-button-${index}`}
        onClick={() => handleOpenModal(service)}
        onKeyDown={handleKeyDown}
        className="animate-pulse outline-none self-end text-4xl gradient-text gradient-border dark:border-0 border-2 border-cobalt relative size-[50px]"
      >
        &#129126;
      </button>
    </li>
  );
};
