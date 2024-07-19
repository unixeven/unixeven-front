'use client';

import { useEffect, FC } from 'react';

import { IoMdClose } from 'react-icons/io';

import { ModalPortal } from '../ModalPortal/ModalPortal';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalPortal>
      <div
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-transparent px-5"
        onClick={handleBackdropClick}
      >
        <div className=" relative size-[358px] md:size-[727px] rounded-full  bg-darkGrey bg-blackMain bg-modalWorkProcessBg px-11 py-16 md:px-24 md:py-44 flex items-center justify-center">
          <button
            type="button"
            className="absolute right-[68px] top-[42px] md:right-32 md:top-32 transition-transform duration-300 hover:scale-125 "
            onClick={onClose}
          >
            <IoMdClose className="fill-lightWhite size-5 md:size-8" />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
