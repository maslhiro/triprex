export interface SubMenu {
  title: string;
  href: string;
}

export interface Menu {
  title: string;
  submenu?: SubMenu[];
  href?: string;
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
  id: string;
  date: string;
  location: string;
  name: string;
  href: string;
  previewImg: string;
  price: number;
  originalPrice: number;
  category: Category[];
}

interface Itinerary {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Video {
  source: string;
  preview: string;
}

export interface TourDetail extends Tour {
  description: string;
  maxPeople: number;
  included: string[];
  excluded: string[];
  highlights: string[];
  itinerary: Itinerary[];
  faq: FAQ[];
  photos: string[];
  videos: Video[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface GalleryItem {
  src: string;
  class: 'horizontal' | 'big' | 'vertical';
  type: 'image' | 'video';
  preview?: string;
}

export interface Contact {
  title: string;
  icon?: string;
  desc: string;
}

export interface Slide {
  img: string;
  title: string;
  desc: string;
  location: string;
}
