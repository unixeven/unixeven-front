'use client';

import { useEffect, FC } from 'react';

import { IoMdClose } from 'react-icons/io';

import { ModalPortal } from '../ModalPortal/ModalPortal';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
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
        <div className={` ${className}`}>
          <button
            type="button"
            className="transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blackMain focus:ring-aqua"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoMdClose className="fill-lightWhite size-5 md:size-8" />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
