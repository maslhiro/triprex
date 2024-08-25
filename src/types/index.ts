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
  images: string[];
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

export interface Tour {
  date: string;
  location: string;
  name: string;
  // href: string;
  previewImg: string;
  price: number;
  originalPrice: number;
}
