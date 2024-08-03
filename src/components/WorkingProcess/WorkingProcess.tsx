'use client';

import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { TitleSections } from '../TitleSection/TitleSection';
import { WorkingProcessList } from '../WorkingProcessList/WorkingProcessList';

import { WorkProcesses } from '@/types/definitions';

interface WorkingProcessProps {
  workProcesses: WorkProcesses;
}

export const WorkingProcess: FC<WorkingProcessProps> = ({ workProcesses }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { backgroundPosition: 'left bottom -20rem' },
        {
          backgroundPosition: 'left bottom 0rem',
          duration: 2,
          ease: 'power2.out',
        }
      );
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={workProcesses.title}
      className="flex flex-col items-center gap-4 md:gap-14 desk:gap-16 h-max py-16  px-4 md:px-6 md:py-20 desk:py-[88px] desk:px-24   bg-workingProcess-bg md:bg-workingProcess-bg-md desk:bg-workingProcess-bg-desk bg-lightBackground dark:bg-transparent bg-cover  bg-no-repeat"
    >
      <TitleSections
        text={workProcesses.title}
        id={workProcesses.title}
        titleRef={titleRef}
      />

      <WorkingProcessList workProcesses={workProcesses} />
    </section>
  );
};
