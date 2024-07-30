import React, { FC, KeyboardEvent } from 'react';

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
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleModal();
    }
  };

  return (
    <button
      type={buttonType}
      onClick={handleModal}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      className={`${className} outline-0 btn dark:border-0 border-2 border-cobalt relative font-montserrat text-2xl/6 font-medium text-cobalt dark:text-lightWhite h-[70px] p-5 flex justify-center items-center gap-[10px] hover:bg-btn-background-color hover:border-0 hover:text-lightWhite focus:bg-btn-background-color focus:text-lightWhite focus:border-0 cursor-pointer`}
    >
      {text}
    </button>
  );
};
