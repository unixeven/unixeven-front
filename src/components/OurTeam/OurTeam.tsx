'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import Image from 'next/image';
import { TitleSections } from '../TitleSection/TitleSection';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface OurTeamProps {
  meetOurTeam: {
    title: string;
    infoTeam: {
      id: string;
      url: string;
      name: string;
      positionWork: string;
      aboutPerson: string;
    }[];
  };
}

export const OurTeam: React.FC<OurTeamProps> = ({ meetOurTeam }) => {
  const { title, infoTeam } = meetOurTeam;

  return (
    <section
      aria-labelledby="Meet our team"
      className="py-16 px-4 md:py-20 md:px-6 xl:py-[88px] xl:px-24 bg-bg_OurTeam_tablet xl:bg-bg_OurTeam_desk bg-[length:198px_368px] md:bg-[length:268px_518px] xl:bg-left xl:bg-[length:50%_100%] bg-left-top bg-no-repeat"
    >
      <TitleSections text={title} id="Meet our team" />

      <Swiper
        modules={[FreeMode, Pagination, Keyboard, Mousewheel]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          950: { slidesPerView: 3, spaceBetween: 16 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        mousewheel={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="team-slider mt-14 xl:mt-16 h-[400px]"
      >
        {infoTeam.map(({ id, url, name, positionWork }) => {
          return (
            <SwiperSlide key={id} className="group">
              <div className="relative overflow-hidden rounded-[15px] ">
                <Image
                  src={url}
                  alt={name}
                  width={300}
                  height={340}
                  className="rounded-[15px] h-[353px] mx-auto"
                />
                <div className="font-montserrat text-lightWhite absolute top-0 left-1/2 -translate-x-1/2 w-[300px] rounded-[15px] h-full flex flex-col gap-2 items-center justify-end p-7 bg-backgroundTeam translate-y-full duration-300 ease-in-out group-hover:translate-y-0 hover:border-3 dark:border-[#09aaa4] border-cobalt">
                  <p className="text-xl/normal font-bold tracking-[0.6px]">
                    {positionWork}
                  </p>
                  <p className="text-base tracking-[0.48px]">{name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
