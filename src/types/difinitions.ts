export interface NavItem {
  name: string;
  id: string;
}

export interface Header {
  nav: NavItem[];
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

export interface Services {
  id: number;
  title: string;
  content: string;
  icon: string;
}

export interface Dictionary {
  lang: string[];
  header: Header;
  aboutUs: AboutUsSection;
  meetOurTeam: MeetOurTeam;
  // services: Service[];
  workProcesses: WorkProcesses;
  // clientsSay: ClientsSay;
  // portfolio: Portfolio;
  // contacts: Contacts;
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
  errors: Errors;
}
