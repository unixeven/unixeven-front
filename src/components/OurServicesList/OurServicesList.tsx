'use client';

import services from '../../data/ourServices.json';
import { FC, useState } from 'react';

import { OurServicesItem } from '../OurServicesItem/OurServicesItem';
import { ServicesDetails } from '../ServicesDetails/ServicesDetails';
import { Modal } from '../Modal/Modal';
import { Service, ServicesData } from '@/types/difinitions';

interface OurServicesListProps {
  services: ServicesData;
}

export const OurServicesList: FC<OurServicesListProps> = ({ services }) => {
  console.log(`services:`, services);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Service | null>(
    null
  );

  const handleOpenModal = (process: Service) => {
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
        {services.ourServices.map((service: Service, index: number) => (
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
        {selectedServices && <ServicesDetails service={selectedServices} />}
      </Modal>
    </>
  );
};
