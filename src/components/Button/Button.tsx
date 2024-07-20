import React from "react";

// interface ButtonProps {
//   buttonType: "submit" | "button";
// }

export const Button = () => {
  return (
    <button 
      type='button'
      className="btn relative font-montserrat text-2xl/6 ont-medium text-center w-[358px] md:w-[340px] desk:w-[400px] h-[70px] px-20 py-5 flex justify-center items-center gap-[10px] hover:bg-btn-background-color focus:bg-btn-background-color cursor-pointer"
    >
      Make a request
    </button>
  )
};
