'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { FormContactUs } from '../FormContactUs/FormContactUs';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.letter');
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 3,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section
      className="w-full pt-[276px] pb-[297px] md:pt-[380px] md:pb-[450px] xl:pt-[300px] xl:pb-[277px]"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        ref={titleRef}
        className="text-center mb-10 md:mb-[60px] font-cinzelDecorativev"
      >
        {'UNIXEVEN'.split('').map((letter, index) => (
          <span
            key={index}
            className="letter inline-block gradient-text font-cinzelDecorative text-[56px]/[40px] md:text-[120px]/[85px] font-bold tracking-[0.5px]"
          >
            {letter}
          </span>
        ))}
      </h1>
      <Button
        buttonType="button"
        className="btn-request mx-auto"
        text="Make a request"
        handleModal={handleOpenModal}
        ariaLabel="Make a request"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="modal-contactUs"
        title="Contact us"
        description="Form contact us"
      >
        <FormContactUs />
      </Modal>
    </section>
  );
};
