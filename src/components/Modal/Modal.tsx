'use client';

import { useEffect, FC, ReactNode, useRef } from 'react';

import { IoMdClose } from 'react-icons/io';

import { ModalPortal } from '../ModalPortal/ModalPortal';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className: string;
  title: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
  title,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 10);

      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      previouslyFocusedElement.current?.focus();
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalPortal>
      <dialog
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-transparent px-5"
        open
      >
        <button
          type="button"
          className="fixed left-0 top-0 h-full w-full bg-transparent cursor-default"
          onClick={handleBackdropClick}
          aria-label="Close backdrop"
        />
        <div className={` ${className}`}>
          <h2 id="modal-title" className="sr-only">
            {title}
          </h2>
          <button
            type="button"
            className="transition-transform duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blackMain focus:ring-aqua"
            onClick={onClose}
            aria-label="Close modal"
            ref={closeButtonRef}
          >
            <IoMdClose className="fill-lightWhite size-5 md:size-8" />
          </button>
          <div id="modal-description" className="sr-only">
            Description of modal content
          </div>
          {children}
        </div>
      </dialog>
    </ModalPortal>
  );
};
