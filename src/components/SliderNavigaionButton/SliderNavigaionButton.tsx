import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const SliderNavigaionButton = () => {
  return (
    <div className="flex items-center justify-around gap-10">
      <button
        className="prev size-[42px] flex justify-center items-center z-10 border-2 dark:border-lightWhite border-cobalt rounded-full md:absolute bottom-1/2 left-2 cursor-pointer hover:scale-110 focus:scale-110 transition-transform duration-300 ease-in-out"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="size-8 dark:fill-lightWhite fill-cobalt" />
      </button>
      <button
        className="next size-[42px] flex justify-center items-center z-10 border-2 dark:border-lightWhite border-cobalt rounded-full md:absolute bottom-1/2 right-2 cursor-pointer hover:scale-110 focus:scale-110 transition-transform duration-300 ease-in-out"
        aria-label="Next slide"
      >
        <IoIosArrowForward className="size-8 dark:fill-lightWhite fill-cobalt" />
      </button>
    </div>
  );
};
