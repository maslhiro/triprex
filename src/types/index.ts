export interface SubMenu {
  title: string;
  href: string;
}

export interface Destination {
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface Location {
  name: string;
  image: string[];
}

export interface DestinationDetail {
  name: string;
  capitalCity: string;
  population: string;
  language: string;
  currency: string;
  body: string;
  location: Location[];
}
