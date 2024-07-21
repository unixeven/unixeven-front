"use client";

import { useRef } from "react";

import { TitleSections } from "../TitleSection/TitleSection";
import { OurClientsFeedbackCard } from "../OurClientsFeedbackCard/OurClientsFeedbackCard";

import ClientPhoto1 from "../../../public/images/our-clients/client-1.jpg";
import ClientPhoto2 from "../../../public/images/our-clients/client-2.jpg";
import ClientPhoto3 from "../../../public/images/our-clients/client-3.jpg";

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
    stars: 3,
    feedback:
      "Working with Unixeven was a fantastic experience! They delivered a stunning, user-friendly website that perfectly represents our brand.",
  },
  {
    id: 3,
    photo: ClientPhoto3,
    name: "Joshua Davis",
    stars: 1,
    feedback:
      "Their professionalism, creativity, and attention to detail made the entire process seamless and enjoyable. We couldn't be happier with the results!",
  },
];

export const OurClients = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section className="w-full py-16 px-4 md:py-20 md:px-28 xl:py-[88px] xl:px-24 bg-our-clients-mobile md:bg-our-clients-tablet xl:bg-our-clients-desktop bg-center bg-no-repeat bg-cover">
      <TitleSections
        text="What our clients say"
        id="our-clients-title"
        titleRef={titleRef}
      />

      <ul>
        {data.map((client) => (
          <li key={client.id}>
            <OurClientsFeedbackCard client={client} />
          </li>
        ))}
      </ul>
    </section>
  );
};
