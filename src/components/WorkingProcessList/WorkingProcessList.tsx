'use client';

import React, { FC, useState } from 'react';

import { WorkingLogo } from '../WorkingLogo/WorkingLogo';

import { Modal } from '../Modal/Modal';
import { WorkProcessItem } from '../WorkProcessItem/WorkProcessItem';
import { WorkingProcessDetails } from '../WorkingProcessDetails/WorkingProcessDetails';
import { Process, WorkProcesses } from '@/types/difinitions';

interface WorkingProcessListProps {
  workProcesses: WorkProcesses;
}

export const WorkingProcessList: FC<WorkingProcessListProps> = ({
  workProcesses,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<Process | null>(null);

  const handleOpenModal = (process: Process) => {
    setSelectedProcess(process);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProcess(null);
  };

  return (
    <div className="relative">
      <ul className="grid grid-cols-2 gap-4 md:gap-0 md:w-[720px] desk:w-full   desk:grid-cols-4 desk:gap-x-40 ">
        {workProcesses.processes.map((process: Process, index: number) => (
          <WorkProcessItem
            key={process.id}
            process={process}
            index={index}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ul>
      <WorkingLogo />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-workingProcess"
        title="Working process details"
        description={selectedProcess ? selectedProcess.name : undefined}
      >
        {selectedProcess && <WorkingProcessDetails process={selectedProcess} />}
      </Modal>
    </div>
  );
};
