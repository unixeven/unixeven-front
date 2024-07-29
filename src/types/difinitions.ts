export interface NavItem {
  name: string;
  id: string;
}

export interface Header {
  nav: NavItem[];
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
  // aboutUs: AboutUs;
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
  name?: {
    _errors: string[];
  };
  email?: {
    _errors: string[];
  };
  phoneNumber?: {
    _errors: string[];
  };
  messageContact?: {
    _errors: string[];
  };
}

export interface InitialState {
  message: string;
  errors: Errors;
}
