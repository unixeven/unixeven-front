import React from 'react';
import { TitleSections } from '../TitleSection/TitleSection';
import { WorkingProcessList } from '../WorkingProcessList/WorkingProcessList';

export const WorkingProcess = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-14 h-max pt-16 pb-[104px] px-4 md:px-6 md:py-20 desk:py-[88px] desk:px-24 bg-workingProcess-bg bg-cover ">
      <TitleSections text="WORKING PROCESS" />

      <WorkingProcessList />
    </section>
  );
};
