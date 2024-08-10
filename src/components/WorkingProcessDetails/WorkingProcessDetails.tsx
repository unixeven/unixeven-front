import { FC } from 'react';

import { Process } from '@/types/definitions';

interface WorkingProcessDetailsProps {
  process: Process;
}

export const WorkingProcessDetails: FC<WorkingProcessDetailsProps> = ({
  process,
}) => {
  return (
    <dl className="z-10  w-[270px] h-[160px] md:w-full md:h-full flex flex-col md:justify-center  text-sm md:text-2xl font-montserrat font-normal md:font-medium tracking-[0.48px] md:tracking-[0.5px] text-lightWhite overflow-y-auto dark:text-lightWhite text-cobalt">
      {Object.entries(process.details).map(([key, value]) => (
        <>
          <dt
            key={`${key}-dt`}
            className="underline uppercase font-bold w-full"
          >
            {key}:
          </dt>
          <dd key={`${key}-dd`} className="pl-2 w-full mb-2 last:mb-0">
            {value}
          </dd>
        </>
      ))}
    </dl>
  );
};
