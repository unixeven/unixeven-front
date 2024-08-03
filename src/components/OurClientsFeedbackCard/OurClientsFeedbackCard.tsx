import Image from "next/image";
import { IClientFeedback } from "@/types/definitions";

import Star from "../../../public/icons/star.svg";
import NotFilledStar from "../../../public/icons/star-not-filled.svg";

export const OurClientsFeedbackCard = ({
  client,
}: {
  client: IClientFeedback;
}) => {
  return (
    <div className="rounded-[32px] relative h-60">
      <div
        className="!rounded-[32px] before:!rounded-[32px] m-[2px] h-full gradient-border py-14 px-5 flex flex-col items-center"
        tabIndex={0}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex justify-center items-center w-[94px] h-[94px] border-3 border-lightWhite rounded-full">
          <Image
            src={client.photo}
            width={91}
            height={91}
            alt={client.name}
            className="w-[91px] h-[91px] object-cover rounded-full"
          />
        </div>

        <span className="absolute -top-14 right-3 font-poppins text-[64px] leading-[1.55] tracking-[1.92px] text-cobalt dark:text-white italic">
          &quot;
        </span>

        <div className="flex flex-col justify-center items-center font-montserrat text-lightWhite">
          <h3 className="text-xl font-bold tracking-[0.6px] mb-2 text-prussianBlue dark:text-white">
            {client.name}
          </h3>

          <div className="flex justify-center items-center gap-x-2 mb-4">
            {Array.from({ length: 5 }, (_, index) =>
              index < client.stars ? (
                <Image
                  key={index}
                  src={Star}
                  width={22}
                  height={22}
                  alt="Rating star"
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <Image
                  key={index}
                  src={NotFilledStar}
                  width={22}
                  height={22}
                  alt="Rating star"
                  className="w-5 h-5 object-contain"
                />
              )
            )}
          </div>

          <p className="text-center text-base tracking-[0.48px] h-[120px] overflow-y-scroll text-prussianBlue dark:text-white">
            {client.feedback}
          </p>
        </div>
      </div>
    </div>
  );
};
