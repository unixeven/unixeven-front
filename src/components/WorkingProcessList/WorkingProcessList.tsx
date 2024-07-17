import React, { FC } from 'react';
import workProcesses from '../../data/workProcesses.json';

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
    <ul className="w-full   flex flex-wrap gap-4">
      {workProcesses.map((process: WorkProcess) => (
        <li
          key={process.id}
          className="gradient-border flex justify-start items-center"
        >
          <p className="text-balance w-full font-montserrat text-xl/5 text-center font-bold tracking-[0.6px]">
            {process.name}
          </p>
        </li>
      ))}
    </ul>
  );
};
