'use client';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Slider: FC = () => {
  return (
    <div className="collection relative flex flex-col items-center gap-4 md:gap-0">
      <Swiper
        className="w-[343px] md:w-[550px] desk:w-[1036px]"
        modules={[Navigation, EffectCoverflow, Autoplay]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoHeight={true}
        slidesPerView="auto"
        loopAdditionalSlides={1}
        loopAddBlankSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 2,
          slideShadows: true,
        }}
        breakpoints={{
          375: {
            coverflowEffect: {
              depth: 100,
            },
          },
          768: {
            coverflowEffect: {
              depth: 462,
            },
          },
          1440: {
            coverflowEffect: {
              depth: 279,
            },
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image1.jpg"
              alt="Slide 1"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image2.jpg"
              alt="Slide 2"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image3.jpg"
              alt="Slide 3"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image4.jpg"
              alt="Slide 4"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image5.jpg"
              alt="Slide 5"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="content">
          <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
            <Image
              src="/images/ourPortfolio/image6.jpg"
              alt="Slide 6"
              fill
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-around gap-10 ">
        <button className="prev size-[42px] flex justify-center items-center z-10 border-2 dark:border-lightWhite border-cobalt rounded-full md:absolute bottom-1/2 left-2 cursor-pointer hover:scale-110 focus:scale-110 transition-transform">
          <IoIosArrowBack className="size-8 dark:fill-lightWhite fill-cobalt" />
        </button>
        <button className="next size-[42px] flex justify-center items-center z-10 border-2 dark:border-lightWhite border-cobalt rounded-full md:absolute bottom-1/2 right-2 cursor-pointer hover:scale-110 focus:scale-110 transition-transform">
          <IoIosArrowForward className="size-8  dark:fill-lightWhite fill-cobalt" />
        </button>
      </div>
    </div>
  );
};
