'use client';

import React, { FC, useState } from 'react';
import clsx from 'clsx';
import workProcesses from '../../data/workProcesses.json';
import { WorkingLogo } from '../WorkingLogo/WorkingLogo';
import { WorkProcess } from '@/types/difinitions';
import { Modal } from '../Modal/Modal';
import { SelectedProcessDetails } from '../WorkingProcessDetails/WorkingProcessDetails';

export const WorkingProcessList: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(`isModalOpen:`, isModalOpen);
  const [selectedProcess, setSelectedProcess] = useState<WorkProcess | null>(
    null
  );

  const handleOpenModal = (process: WorkProcess) => {
    setSelectedProcess(process);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProcess(null);
  };

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:gap-0 md:w-[720px] desk:w-full  relative desk:grid-cols-4 desk:gap-x-40 ">
        {workProcesses.map((process: WorkProcess, index: number) => (
          <li
            key={process.id}
            className={clsx(
              'gradient-border relative size-[171px] flex justify-center items-center cursor-pointer',
              {
                'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1 desk:justify-self-end desk:self-end':
                  index === 2,
                'md:col-span-2 md:size-[162px] md:justify-self-center desk:col-span-1 desk:justify-self-start':
                  index === 7,
                'md:size-[221px] md:justify-self-start': index === 0,
                'md:size-[221px] md:justify-self-end desk:size-[162px] desk:justify-self-start desk:self-end':
                  index === 1,
                'md:size-[221px] md:justify-self-start desk:size-[162px] desk:justify-self-end':
                  index === 8,
                'md:size-[221px] md:justify-self-end': index === 9,
                'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-end':
                  index === 3,
                'md:size-[162px] md:justify-self-center desk:col-span-2':
                  index === 4,
                'md:size-[162px]  md:justify-self-center desk:col-span-2':
                  index === 5,
                'md:size-[162px] md:justify-self-center desk:size-[221px] desk:justify-self-start':
                  index === 6,
                'md:mb-[173px] desk:mb-0': index === 4,
              }
            )}
            onClick={() => handleOpenModal(process)}
          >
            <p className="text-balance w-full font-montserrat text-xl/5 md:text-2xl/6 md:font-medium text-center font-bold tracking-[0.6px]">
              {process.name}
            </p>
          </li>
        ))}
        <WorkingLogo />
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-workingProcess"
      >
        {selectedProcess && (
          <SelectedProcessDetails process={selectedProcess} />
        )}
      </Modal>
    </>
  );
};
