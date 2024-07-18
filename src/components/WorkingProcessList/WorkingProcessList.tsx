import React, { FC } from 'react';
import clsx from 'clsx';
import workProcesses from '../../data/workProcesses.json';
import { WorkingLogo } from '../WorkingLogo/WorkingLogo';

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
    <ul className="grid grid-cols-2 gap-4 md:gap-0 md:w-full relative desk:grid-cols-4 desk:gap-x-40">
      {workProcesses.map((process: WorkProcess, index: number) => (
        <li
          key={process.id}
          className={clsx(
            'gradient-border relative size-[171px] flex justify-center items-center',
            {
              'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1 desk:self-end':
                index === 2,
              'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1':
                index === 7,
              'md:size-[221px] md:justify-self-start': index === 0,
              'md:size-[221px] md:justify-self-end desk:size-[162px] desk:justify-self-center desk:self-end':
                index === 1,
              'md:size-[221px] md:justify-self-start desk:size-[162px] desk:justify-self-center':
                index === 8,
              'md:size-[221px] md:justify-self-end': index === 9,
              'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-end':
                index === 3,
              'md:size-[162px] md:justify-self-center desk:col-span-2':
                index === 4,
              'md:size-[162px]  md:justify-self-center desk:col-span-2':
                index === 5,
              'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-start':
                index === 6,
              'md:mb-[173px] desk:mb-0': index === 4,
            }
          )}
        >
          <p className="text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
            {index}
          </p>
        </li>
      ))}
      <WorkingLogo />
    </ul>
  );
};
