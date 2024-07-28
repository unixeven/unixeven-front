export interface Detail {
  [key: string]: string | undefined;
}

export interface WorkProcess {
  id: number;
  name: string;
  details: Detail;
}

export interface Services {
  id: number;
  title: string;
  content: string;
  icon: string;
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
  message: string,
  errors: Errors,
}
