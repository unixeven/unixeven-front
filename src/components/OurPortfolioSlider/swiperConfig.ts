import { SwiperOptions } from 'swiper/types';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

export const swiperConfig: SwiperOptions = {
  modules: [Navigation, EffectCoverflow, Autoplay],
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoHeight: true,
  slidesPerView: 'auto',
  loopAdditionalSlides: 1,
  loopAddBlankSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    modifier: 2,
    slideShadows: true,
  },
  breakpoints: {
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
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
