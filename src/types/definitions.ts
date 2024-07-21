import { StaticImageData } from "next/image";

export interface Detail {
  [key: string]: string | undefined;
}

export interface WorkProcess {
  id: number;
  name: string;
  details: Detail;
}

export interface IClientFeedback {
  id: number;
  name: string;
  photo: StaticImageData | string;
  stars: number;
  feedback: string;
}
