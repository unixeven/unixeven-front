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
    <div className="collection relative">
      <button className="prev size-[42px] flex justify-center items-center z-10 border-2 border-lightWhite rounded-full absolute bottom-2/4 left-0 cursor-pointer hover:scale-110 focus:scale-110 transition-transform ">
        <IoIosArrowBack className="size-8  fill-lightWhite " />
      </button>
      <button className="next size-[42px] flex justify-center items-center z-10 border-2 border-lightWhite rounded-full absolute  bottom-2/4 right-0 cursor-pointer hover:scale-110 focus:scale-110 transition-transform">
        <IoIosArrowForward className=" size-8 fill-lightWhite" />
      </button>
      <Swiper
        className="w-[1036px]"
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
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 2.5,
          slideShadows: true,
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
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
              sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 390px"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
