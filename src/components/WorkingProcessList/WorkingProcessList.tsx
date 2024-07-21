'use client';

import React, { FC, useState } from 'react';
import workProcesses from '../../data/workProcesses.json';
import { WorkingLogo } from '../WorkingLogo/WorkingLogo';
import { WorkProcess } from '@/types/difinitions';
import { Modal } from '../Modal/Modal';
import { WorkProcessItem } from '../WorkProcessItem/WorkProcessItem';
import { WorkingProcessDetails } from '../WorkingProcessDetails/WorkingProcessDetails';

export const WorkingProcessList: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <WorkProcessItem
            key={process.id}
            process={process}
            index={index}
            handleOpenModal={handleOpenModal}
          />
        ))}
        <WorkingLogo />
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-workingProcess"
        title="Working process details"
        description={selectedProcess ? selectedProcess.name : undefined}
      >
        {selectedProcess && <WorkingProcessDetails process={selectedProcess} />}
      </Modal>
    </>
  );
};
