import React from 'react';
import { TitleSections } from '../TitleSection/TitleSection';
import { WorkingProcessList } from '@/WorkingProcessList/WorkingProcessList';

export const WorkingProcess = () => {
  return (
    <section className=" h-[1143px] pt-16 pb-[104px]">
      <TitleSections text="WORKING PROCESS" />
      <WorkingProcessList />
    </section>
  );
};
