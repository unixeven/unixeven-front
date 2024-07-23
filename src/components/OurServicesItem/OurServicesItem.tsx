import { Services } from '@/types/difinitions';
import Image from 'next/image';
import { FC, KeyboardEvent } from 'react';

interface OurServicesItemProps {
  service: Services;
  index: number;
  handleOpenModal: (service: Services) => void;
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
      className="w-full desk:w-[calc((100%-2*24px)/3)] gradient-border dark:border-0  border-2 border-cobalt relative px-6 pb-6 pt-[46px] md:px-10 md:pt-[109px] md:pb-10 desk:px-6 desk:pt-[46px] desk:pb-6 flex flex-col items-center  justify-center gap-4 !rounded-[32px] before:!rounded-[32px]"
    >
      <h3 className="uppercase font-montserrat text-[25px]/[40px] font-medium tracking-[0.5px]">
        {service.title}
      </h3>
      <Image
        src="/icons/qa.svg"
        alt="Company Unixeven Logo"
        width={80}
        height={47}
      />

      <button
        onClick={() => handleOpenModal(service)}
        onKeyDown={handleKeyDown}
        className=" self-end text-4xl  gradient-text gradient-border dark:border-0  border-2 border-cobalt relative size-[50px]  "
      >
        &#129126;
      </button>
    </li>
  );
};
