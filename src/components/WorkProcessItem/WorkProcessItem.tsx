import React, { FC } from 'react';
import clsx from 'clsx';
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
  return (
    <li
      key={process.id}
      className={clsx(
        'gradient-border relative size-[171px] flex justify-center items-center cursor-pointer',
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
        className="size-full z-0"
        aria-label={`Open modal for ${process.name}`}
      >
        <p className="text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
          {process.name}
        </p>
      </button>
    </li>
  );
};
