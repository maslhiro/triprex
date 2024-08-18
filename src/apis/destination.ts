import { Destination } from 'src/types';

const mockData = [
  {
    name: 'India',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-09.webp',
    href: '',
  },
  {
    name: 'Brazil',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-08.webp',
    href: '',
  },
  {
    name: 'India',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-07.webp',
    href: '',
  },
  {
    name: 'Australia',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-06.webp',
    href: '',
  },
  {
    name: 'Sweden',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-05.webp',
    href: '',
  },
  {
    name: 'Japan',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-04.webp',
    href: '',
  },
];

export const fetchAll = (): Promise<Destination[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
