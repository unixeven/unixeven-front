'use client';
import Image from 'next/image';
import services from '../../data/ourServices.json';
import { useState } from 'react';
import { Services } from '@/types/difinitions';

import { OurServicesItem } from '../OurServicesItem/OurServicesItem';
import { ServicesDetails } from '../ServicesDetails/ServicesDetails';
import { Modal } from '../Modal/Modal';

export const OurServicesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Services | null>(
    null
  );
  console.log(`isModalOpen:`, isModalOpen);
  console.log(`selectedServices:`, selectedServices);

  const handleOpenModal = (process: Services) => {
    setSelectedServices(process);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedServices(null);
  };

  return (
    <>
      <ul className="w-full md:w-[540px] desk:w-full flex flex-col desk:flex-row desk:flex-wrap gap-4 desk:justify-center">
        {services.map((service: Services, index: number) => (
          <OurServicesItem
            key={service.id}
            service={service}
            index={index}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-services"
        title="Our services details"
        description={selectedServices ? selectedServices.title : undefined}
      >
        {selectedServices && <ServicesDetails services={selectedServices} />}
      </Modal>
    </>
  );
};
