import React from "react";
import Image from "next/image";
import AboutUs_1 from "../../../public/images/AboutUs_1.webp";
import AboutUs_2 from "../../../public/images/AboutUs_2.webp";
import AboutUs_3 from "../../../public/images/AboutUs_3.webp";
import AboutUs_4 from "../../../public/images/AboutUs_4.webp";
import { TitleSections } from "../TitleSection/TitleSection";

export const AboutUs = () => {
  return (
    <section className="md:bg-aboutUs-bg-md md:!bg-[length:396px_455px] desk:bg-aboutUs-bg-desk desk:!bg-[length:404px_503px] bg-no-repeat bg-right-top  w-full px-4 desk:px-24 py-16 md:py-20 desk:py-[88px]">
      <TitleSections text="about us" id="about-us-title" />
      <div className="flex flex-col desk:flex-row gap-12 md:gap-8 desk:gap-6">
        <div className="mt-14 relative desk:w-1/2">
          <div className="absolute inset-0 flex flex-col justify-between z-0 py-5">
            <div className="img-border w-[70px] desk:w-[140px] h-11 desk:h-[76px] mx-auto"></div>
            <div className="img-border w-[70px] desk:w-[140px] h-11 desk:h-[76px] mx-auto"></div>
          </div>
          <div className="flex gap-4 justify-center relative z-10">
            <div className="flex flex-col gap-4 desk:gap-6">
              <Image
                src={AboutUs_1}
                alt="Person explaining a diagram on a whiteboard to colleagues"
                className="rounded-tl-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
              />
              <Image
                src={AboutUs_2}
                alt="Group of people working together at a table with laptops"
                className="rounded-bl-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
              />
            </div>
            <div className="flex flex-col gap-4 desk:gap-6 pt-9">
              <Image
                src={AboutUs_3}
                alt="Computer screen displaying code"
                className="rounded-tr-[43px]  w-[171px] md:w-[340px] desk:w-[294px]"
              />
              <Image
                src={AboutUs_4}
                alt="Laptop on a desk with a chair beside it"
                className="rounded-br-[43px] w-[171px] md:w-[340px] desk:w-[294px]"
              />
            </div>
          </div>
        </div>
        <div className="desk:w-1/2">
          <p className="text-2xl font-normal leading-9 dark:text-lightWhite text-prussianBlue desk:py-[81px]">
            Our mission is simple: to elevate your brand through exceptional
            design. We believe that great design has the power to connect,
            inspire, and drive success. By understanding your unique vision and
            goals, we craft bespoke design solutions that resonate with your
            audience and stand out in the marketplace.
            <br />
            <br />
            We are your partners in digital success. We strive to exceed your
            expectations by delivering exceptional results that not only meet
            but surpass your business goals. Trust Unixeven to turn your ideas
            into reality and help your business thrive in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};
