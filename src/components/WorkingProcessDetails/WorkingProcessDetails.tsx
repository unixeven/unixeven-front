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
        <div key={key}>
          <h2 className="underline uppercase">{key}:</h2>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};
