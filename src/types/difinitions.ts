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
}
