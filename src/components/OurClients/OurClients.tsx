"use client";

import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";

import { TitleSections } from "../TitleSection/TitleSection";
import { OurClientsFeedbackCard } from "../OurClientsFeedbackCard/OurClientsFeedbackCard";

import ClientPhoto1 from "../../../public/images/our-clients/client-1.jpg";
import ClientPhoto2 from "../../../public/images/our-clients/client-2.jpg";
import ClientPhoto3 from "../../../public/images/our-clients/client-3.jpg";

import "swiper/css";
import { ClientsFeedbackTitle } from "@/types/definitions";

const data = [
  {
    id: 1,
    photo: ClientPhoto1,
    name: "Alice Brown",
    stars: 5,
    feedback:
      "From the initial consultation to the final launch, their team displayed exceptional professionalism and creativity.",
  },
  {
    id: 2,
    photo: ClientPhoto2,
    name: "Dave Clark",
    stars: 4,
    feedback:
      "Working with Unixeven was a fantastic experience! They delivered a stunning, user-friendly website that perfectly represents our brand.",
  },
  {
    id: 3,
    photo: ClientPhoto3,
    name: "Joshua Davis",
    stars: 5,
    feedback:
      "Their professionalism, creativity, and attention to detail made the entire process seamless and enjoyable. We couldn't be happier with the results!",
  },
];

interface OurClientsProps {
  clientsSay: ClientsFeedbackTitle;
}

export const OurClients: FC<OurClientsProps> = ({ clientsSay: { title } }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section className="w-full py-16 px-4 md:py-20 md:px-28 xl:py-[88px] xl:px-24 bg-our-clients-mobile md:bg-our-clients-tablet xl:bg-our-clients-desktop bg-[center_bottom] bg-no-repeat bg-contain">
      <TitleSections text={title} id="our-clients-title" titleRef={titleRef} />

      <div className="mt-14 h-[1000px] xl:h-full xl:mt-16">
        <Swiper
          direction={"vertical"}
          breakpoints={{
            1280: {
              direction: "horizontal",
              spaceBetween: 32,
            },
          }}
          modules={[Keyboard, Mousewheel]}
          slidesPerView={3}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          mousewheel
          loop
          className="h-full"
        >
          {[...data, ...data, ...data].map((client) => (
            <SwiperSlide key={client.id}>
              <div className="first:pt-10">
                <OurClientsFeedbackCard client={client} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
