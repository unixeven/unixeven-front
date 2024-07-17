import React, { FC } from 'react';
import clsx from 'clsx';
import workProcesses from '../../data/workProcesses.json';
import { Logo } from '../Logo/Logo';

interface Detail {
  [key: string]: string | undefined;
}

interface WorkProcess {
  id: number;
  name: string;
  angle: number;
  details: Detail;
}

export const WorkingProcessList: FC = () => {
  return (
    <ul className="grid grid-cols-2  gap-4 md:gap-0 md:w-full relative">
      {workProcesses.map((process: WorkProcess, index: number) => (
        <li
          key={process.id}
          className={clsx(
            'gradient-border relative size-[171px] flex justify-center items-center',
            {
              'md:col-span-2 md:size-[162px] md:mx-auto':
                index === 2 || index === 7,
              'md:size-[221px] md:justify-self-start':
                index === 0 || index === 8,
              'md:size-[221px] md:justify-self-end': index === 1 || index === 9,
              'md:size-[162px] md:mx-auto':
                index === 3 || index === 4 || index === 5 || index === 6,
              'md:mb-[173px]': index === 4,
            }
          )}
        >
          <p className="text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
            {process.name}
          </p>
        </li>
      ))}
      <Logo />
    </ul>
  );
};
