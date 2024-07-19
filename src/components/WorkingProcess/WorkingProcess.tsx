import React from 'react';
import { TitleSections } from '../TitleSection/TitleSection';
import { WorkingProcessList } from '../WorkingProcessList/WorkingProcessList';

export const WorkingProcess = () => {
  return (
    <section
      aria-labelledby="working-process-title"
      className="flex flex-col items-center gap-4 md:gap-14 desk:gap-16 h-max pt-16 pb-[104px] px-4 md:px-6 md:py-20 desk:py-[88px] desk:px-24 bg-workingProcess-bg md:bg-workingProcess-bg-md desk:bg-workingProcess-bg-desk bg-cover bg-[left_bottom_2rem] bg-no-repeat"
    >
      <TitleSections text="working process" id="working-process-title" />

      <WorkingProcessList />
    </section>
  );
};
