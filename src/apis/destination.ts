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
    name: 'Indonesia',
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
    name: 'Japan',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-05.webp',
    href: '',
  },
  {
    name: 'Spain',
    desc: '5 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-04.webp',
    href: '',
  },
  {
    name: 'Sweden',
    desc: '1 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-02.webp',
    href: '',
  },
  {
    name: 'New York',
    desc: '1 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-02.webp',
    href: '',
  },
  {
    name: 'Saudi Arab',
    desc: '2 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-03.webp',
    href: '',
  },
  {
    name: 'Switzerland',
    desc: '1 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-10.webp',
    href: '',
  },
  {
    name: 'Egypt',
    desc: '1 tour',
    image:
      'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Destination-05.webp',
    href: '',
  },
  {
    name: 'Greece',
    desc: '5 tours',
    image: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Greece',
    href: '',
  },
  {
    name: 'France',
    desc: '4 tours',
    image: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=France',
    href: '',
  },
  {
    name: 'Norway',
    desc: '3 tours',
    image: 'https://via.placeholder.com/300x200/5733FF/FFFFFF?text=Norway',
    href: '',
  },
  {
    name: 'China',
    desc: '6 tours',
    image: 'https://via.placeholder.com/300x200/FF33A5/FFFFFF?text=China',
    href: '',
  },
  {
    name: 'Peru',
    desc: '2 tours',
    image: 'https://via.placeholder.com/300x200/33A5FF/FFFFFF?text=Peru',
    href: '',
  },
  {
    name: 'Mexico',
    desc: '3 tours',
    image: 'https://via.placeholder.com/300x200/A533FF/FFFFFF?text=Mexico',
    href: '',
  },
];

export const fetchAll = (): Promise<Destination[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
