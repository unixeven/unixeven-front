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
    <ul className="grid grid-cols-2 gap-4 md:gap-0 md:w-full relative desk:transform desk:-rotate-90 desk:w-max">
      {workProcesses.map((process: WorkProcess, index: number) => (
        <li
          key={process.id}
          className={clsx(
            'gradient-border relative size-[171px] flex justify-center items-center',
            {
              'md:col-span-2 md:size-[162px] md:mx-auto ':
                index === 2 || index === 7,
              'md:size-[221px] md:justify-self-start desk:justify-self-center desk:mr-[81px] desk:-mb-10':
                index === 0,
              'md:size-[221px] md:justify-self-end desk:justify-self-center desk:ml-[81px] desk:-mb-10':
                index === 1,
              'md:size-[221px] md:justify-self-start desk:justify-self-start desk:-mt-10 ':
                index === 8,
              'md:size-[221px] md:justify-self-end desk:justify-self-end desk:-mt-10':
                index === 9,
              'md:size-[162px] md:mx-auto desk:mx-0 desk:justify-self-end desk:mr-[81px]':
                index === 3,
              'md:size-[162px] md:mx-auto desk:mx-0 desk:ml-[81px]':
                index === 4,
              'md:size-[162px] md:mx-auto desk:mx-0 desk:justify-self-end desk:mr-[81px] ':
                index === 5,
              'md:size-[162px] md:mx-auto desk:mx-0 desk:ml-[81px]  ':
                index === 6,
              'md:mb-[173px] desk:mb-[236px]': index === 4,
            }
          )}
        >
          <p className="desk:transform desk:rotate-90 desk:origin-center text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
            {process.name}
          </p>
        </li>
      ))}
      <WorkingLogo />
    </ul>
  );
};
