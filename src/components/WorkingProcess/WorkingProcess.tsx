import React from 'react';
import { TitleSections } from '../TitleSection/TitleSection';
import { WorkingProcessList } from '@/WorkingProcessList/WorkingProcessList';

export const WorkingProcess = () => {
  return (
    <section className=" h-[1143px] pt-16 pb-[104px] px-4 md:px-6 desk:px-24 bg-workingProcess-bg bg-cover bg-center">
      <TitleSections text="WORKING PROCESS" />
      <WorkingProcessList />
    </section>
  );
};
