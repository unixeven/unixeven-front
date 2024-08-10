'use client';
import React, { FC, KeyboardEvent } from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
  buttonType: 'submit' | 'button';
  className: string;
  text: string;
  handleModal: () => void;
  ariaLabel: string;
}

export const Button: FC<ButtonProps> = ({
  buttonType,
  className,
  text,
  handleModal,
  ariaLabel,
}) => {
  const { pending } = useFormStatus();
  console.log(`pending:`, pending);
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleModal();
    }
  };

  return (
    <button
      disabled={pending}
      type={buttonType}
      onClick={handleModal}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      className={`${className} outline-0 btn dark:border-0 border-2 border-cobalt relative font-montserrat text-2xl/6 font-medium text-cobalt dark:text-lightWhite h-[70px] p-5 flex justify-center items-center gap-[10px]  transition-opacity duration-300 ease-in-out ${
        pending ? 'opacity-50 !cursor-not-allowed' : 'opacity-100'
      }`}
    >
      {text}
    </button>
  );
};
