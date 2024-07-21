import React, { FC, KeyboardEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { WorkProcess } from '@/types/difinitions';

interface WorkProcessItemProps {
  process: WorkProcess;
  index: number;
  handleOpenModal: (process: WorkProcess) => void;
}

export const WorkProcessItem: FC<WorkProcessItemProps> = ({
  process,
  index,
  handleOpenModal,
}) => {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.1 }
      );
    }
  }, [index]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOpenModal(process);
    }
  };

  return (
    <li
      ref={itemRef}
      key={process.id}
      className={clsx(
        'size-[171px] flex justify-center items-center cursor-pointer rounded-full',
        {
          'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1 desk:justify-self-end desk:self-end':
            index === 2,
          'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1 desk:justify-self-start':
            index === 7,
          'md:size-[221px] md:justify-self-start': index === 0,
          'md:size-[221px] md:justify-self-end desk:size-[162px] desk:justify-self-start desk:self-end':
            index === 1,
          'md:size-[221px] md:justify-self-start desk:size-[162px] desk:justify-self-end':
            index === 8,
          'md:size-[221px] md:justify-self-end': index === 9,
          'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-end':
            index === 3,
          'md:size-[162px] md:justify-self-center desk:col-span-2': index === 4,
          'md:size-[162px]  md:justify-self-center desk:col-span-2':
            index === 5,
          'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-start':
            index === 6,
          'md:mb-[173px] desk:mb-0': index === 4,
        }
      )}
    >
      <button
        onClick={() => handleOpenModal(process)}
        onKeyDown={handleKeyDown}
        className="gradient-border btn-light size-full relative outline-none "
        tabIndex={0}
        aria-label={`Open modal for ${process.name}`}
      >
        <p className="text-lightWhite text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
          {process.name}
        </p>
      </button>
    </li>
  );
};
