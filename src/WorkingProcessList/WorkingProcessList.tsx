// src/components/WorkingProcessList.tsx
import React, { FC } from 'react';
import workProcesses from '../data//workProcesses.json';

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
    <ul className="w-full h-full flex flex-wrap gap-4">
      {workProcesses.map((process: WorkProcess) => (
        <li
          key={process.id}
          className="h-10 w-14 !bg-cobalt border !border-red-500"
        >
          {/* <p className="text-xs font-bold">{process.name}</p> */}
        </li>
      ))}
    </ul>
  );
};
