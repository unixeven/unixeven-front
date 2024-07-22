import Image from 'next/image';
import services from '../../data/ourServices.json';

export const OurServicesList = () => {
  return (
    <ul className="w-full md:w-[540px] desk:w-full flex flex-col desk:flex-row desk:flex-wrap gap-4 desk:justify-center">
      {services.map(service => (
        <li
          key={service.id}
          className="w-full desk:w-[calc((100%-2*24px)/3)] gradient-border dark:border-0  border-2 border-cobalt relative px-6 pb-6 pt-[46px] md:px-10 md:pt-[109px] md:pb-10 desk:px-6 desk:pt-[46px] desk:pb-6 flex flex-col items-center  justify-center gap-4 !rounded-[32px] before:!rounded-[32px]"
        >
          <h3 className="uppercase font-montserrat text-[25px]/[40px] font-medium tracking-[0.5px]">
            {service.title}
          </h3>
          <Image
            src="/images/6.webp"
            alt="Company Unixeven Logo"
            width={80}
            height={47}
          />

          <button className=" self-end text-4xl  gradient-text gradient-border dark:border-0  border-2 border-cobalt relative size-[50px]  ">
            &#129126;
          </button>
        </li>
      ))}
    </ul>
  );
};
