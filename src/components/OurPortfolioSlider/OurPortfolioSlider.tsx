'use client';
import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNavigaionButton } from '../SliderNavigaionButton/SliderNavigaionButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { swiperConfig } from './swiperConfig';

import { Slide } from '@/types/definitions';

interface SliderProps {
  slides: Slide[];
}

export const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <div className="collection relative flex flex-col items-center gap-4 md:gap-0">
      <Swiper
        className="w-[343px] md:w-[550px] desk:w-[1036px] portfolio"
        {...swiperConfig}
        aria-live="polite"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="content"
            aria-label={slide.ariaLabel}
          >
            <div className="relative w-full h-[482px] desk:h-[482px] md:h-[410px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 767px) 279px, (max-width: 1023px) 400px, 343px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigaionButton />
    </div>
  );
};
