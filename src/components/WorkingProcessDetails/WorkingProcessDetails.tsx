import React, { FC } from 'react';
import { WorkProcess } from '@/types/difinitions';

interface WorkingProcessDetailsProps {
  process: WorkProcess;
}

export const WorkingProcessDetails: FC<WorkingProcessDetailsProps> = ({
  process,
}) => {
  return (
    <div className="size-full flex flex-col justify-center items-start w-full h-full text-sm md:text-2xl font-montserrat font-normal md:font-medium tracking-[0.48px] md:tracking-[0.5px] text-lightWhite">
      {Object.entries(process.details).map(([key, value]) => (
        <dl key={key} className="mb-4">
          <dt className="underline uppercase font-bold">{key}:</dt>
          <dd className="ml-2">{value}</dd>
        </dl>
      ))}
    </div>
  );
};
