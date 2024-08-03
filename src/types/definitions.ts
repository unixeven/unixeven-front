import { StaticImageData } from 'next/image';
import { ZodFormattedError } from 'zod';

export interface NavItem {
  name: string;
  id: string;
}

export interface Header {
  nav: NavItem[];
}

export interface HeroData {
  title: string;
  textButton: string;
}

export interface AboutUsSection {
  title: string;
  text_1: string;
  text_2: string;
}

export interface TeamMember {
  id: string;
  url: string;
  name: string;
  positionWork: string;
  aboutPerson: string;
}

export interface MeetOurTeam {
  title: string;
  infoTeam: TeamMember[];
}

export interface ServiceSubsection {
  id: number;
  title: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  category: string;
  content: string;
  subsections: {
    [key: string]: ServiceSubsection[];
  };
}

export interface ServicesData {
  titleSection: string;
  ourServices: Service[];
}

export interface WorkProcessDetails {
  [key: string]: string;
}

export interface Process {
  id: number;
  name: string;
  details: WorkProcessDetails;
}

export interface WorkProcesses {
  title: string;
  processes: Process[];
}

export interface IClientFeedback {
  id: number;
  name: string;
  photo: StaticImageData | string;
  stars: number;
  feedback: string;
}

export interface Slide {
  id: number;
  src: string;
  alt: string;
  ariaLabel: string;
}

export interface Portfolio {
  title: string;
  slides: Slide[];
}

export interface ContactsData {
  title: string;
  subTitle: string;
  spanText: string;
  textButton: string;
}

export interface FooterData {
  title: {
    services: string;
    onlineChat: string;
    contactUs: string;
  };
  servicesList: string[];
  onlineChat: {
    telegram: string;
    viber: string;
  };
  contactUs: {
    phone: string;
    email: string;
  };
}

export interface Dictionary {
  lang: string[];
  header: Header;
  hero: HeroData;
  aboutUs: AboutUsSection;
  meetOurTeam: MeetOurTeam;
  services: ServicesData;
  workProcesses: WorkProcesses;
  // clientsSay: ClientsSay;
  portfolio: Portfolio;
  contacts: ContactsData;
  footer: FooterData;
}

export interface DataMessage {
  name: string;
  email: string;
  phoneNumber: string;
  messageContact: string;
}

export interface Errors {
  [key: string]: {
    _errors: string[];
  };
}

export interface InitialState {
  message: string;
  errors: Errors | ZodFormattedError<DataMessage>;
}

export interface SendMailResponse {
  message: string;
}
