import Image from "next/image";
import { IClientFeedback } from "@/types/definitions";

export const OurClientsFeedbackCard = ({
  client,
}: {
  client: IClientFeedback;
}) => {
  return (
    <div className="rounded-[32px] bg-gradient-to-r from-cobalt via-pacificBlue to-cyan">
      <div className="rounded-[32px] m-[2px] w-full h-full bg-transparent py-14 px-5">
        <div className="w-[94px] h-[94px] border-3 border-lightWhite rounded-full">
          <Image
            src={client.photo}
            width={91}
            height={91}
            alt={client.name}
            className="w-[91px] h-[91px] object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center font-montserrat text-lightWhite">
          <h3 className="text-xl font-bold tracking-[0.6px] mb-2">
            {client.name}
          </h3>
          <p className="text-base tracking-[0.48px]">{client.feedback}</p>
        </div>
      </div>
    </div>
  );
};
