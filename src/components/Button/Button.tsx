import React, { FC } from "react";

interface ButtonProps {
  buttonType: "submit" | "button";
  className: string;
  text: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({buttonType, className, text, onClick}) => {
  return (
    <button 
      type={buttonType}
      onClick={onClick}
      aria-label={text}
      className={`${className} btn relative font-montserrat text-2xl/6 ont-medium text-center h-[70px] p-5 flex justify-center items-center gap-[10px] hover:bg-btn-background-color focus:bg-btn-background-color cursor-pointer`}
    >
      {text}
    </button>
  )
};
