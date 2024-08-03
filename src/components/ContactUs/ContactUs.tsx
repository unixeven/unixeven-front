'use client';

import { FC, useState } from 'react';

import { Button } from '../Button/Button';
import { TitleContactUs } from '../TitleContactUs/TitleContactUs';
import { SocialContactUs } from '../SocialContactUs/SocialContactUs';
import { Modal } from '../Modal/Modal';
import { FormContactUs } from '../FormContactUs/FormContactUs';

import { ContactsData } from '@/types/definitions';

interface ContactUsProps {
  contacts: ContactsData;
}

export const ContactUs: FC<ContactUsProps> = ({ contacts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section
      aria-labelledby="section-contact-us"
      className="flex flex-col items-center gap-[104px] md:gap-10 desk:gap-20 py-[148px] px-4 bg-contactUs-light-bg dark:bg-contactUs-bg md:py-[120px] md:px-6 md:bg-contactUs-light-bg-md dark:md:bg-contactUs-bg-md desk:px-[202px] desk:pt-[228px] desk:pb-[68px] desk:bg-contactUs-light-bg-desk dark:desk:bg-contactUs-bg-desk dark:bg-transparent bg-lightBackground bg-cover bg-no-repeat"
    >
      <h2 id="section-contact-us" className="sr-only">
        {contacts.title}
      </h2>
      <div className="flex flex-col items-center gap-6 ">
        <TitleContactUs text={contacts.subTitle} spanText={contacts.spanText} />
        <Button
          buttonType="button"
          className="btn-request"
          text={contacts.textButton}
          handleModal={handleOpenModal}
          ariaLabel="Open modal for contact us form"
        />
      </div>
      <SocialContactUs />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-contactUs"
        title="Contact us"
        description="Form contact us"
        aria-labelledby="modal-contact-us-title"
        aria-describedby="modal-contact-us-description"
      >
        <FormContactUs />
      </Modal>
    </section>
  );
};
