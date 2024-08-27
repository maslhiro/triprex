import { Tour } from 'src/types';
import categories from './categoryMockData';

interface DataStructure {
  list: Tour[];
}

const MockData: DataStructure = {
  list: [
    {
      id: 'a1b2c3d4',
      name: 'Discover Serenity, Exploration, and Enlightenment.',
      date: '1 Week',
      location: 'Egypt',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-10-650x450.webp',
      price: 340,
      originalPrice: 450,
      href: 'tour/a1b2c3d4',
      category: [categories[0]], // Adventure Tours
    },
    {
      id: 'e5f6g7h8',
      name: 'Embracing City Lights, Landmarks, and Iconic Culture.',
      date: '3 Days / 4 Night',
      location: 'Indonesia',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-12-650x450.webp',
      price: 240,
      originalPrice: 380,
      href: 'tour/e5f6g7h8',
      category: [categories[1], categories[3]], // Cultural Tours, Historical Tours
    },
    {
      id: 'i9j0k1l2',
      name: 'Immersive Cultural Experiences, Local Cuisine.',
      date: '10 Days / 11 Night',
      location: 'New York',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-05-650x450.webp',
      price: 500,
      originalPrice: 580,
      href: 'tour/i9j0k1l2',
      category: [categories[1]], // Cultural Tours
    },
    {
      id: 'm3n4o5p6',
      name: 'Exploring Ancient Ruins, Historic Landmarks, and Cultural.',
      date: '4 Days / 5 Night',
      location: 'Saudi Arab',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-04-650x450.webp',
      price: 760,
      originalPrice: 800,
      href: 'tour/m3n4o5p6',
      category: [categories[3]], // Historical Tours
    },
    {
      id: 'q7r8s9t0',
      name: 'Adventure Art, Architecture, And Mediterranean.',
      date: '4 Days / 5 Night',
      location: 'Brazil',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-07-650x450.webp',
      price: 170,
      originalPrice: 220,
      href: 'tour/q7r8s9t0',
      category: [categories[0], categories[2]], // Adventure Tours, Group Tours
    },
    {
      id: 'u1v2w3x4',
      name: 'A Journey Of Tour Beauty And Inspiration.',
      date: '7 Days / 8 Night',
      location: 'Australia',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-09-650x450.webp',
      price: 160,
      originalPrice: 180,
      href: 'tour/u1v2w3x4',
      category: [categories[4]], // Honey Moon Tours
    },
    {
      id: 'y5z6a7b8',
      name: 'Immersing in City Skylines, Heritage, and Vibrant Lifestyles.',
      date: '4 Days / 5 Night',
      location: 'Sweden',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-04-650x450.webp',
      price: 260,
      originalPrice: 380,
      href: 'tour/y5z6a7b8',
      category: [categories[2]], // Group Tours
    },
    {
      id: 'c9d0e1f2',
      name: 'Explore Travel NYC’s Museums, Diversity, And Energy.',
      date: '2 Days / 3 Night',
      location: 'Japan',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-05-650x450.webp',
      price: 290,
      originalPrice: 350,
      href: 'tour/c9d0e1f2',
      category: [categories[1], categories[3]], // Cultural Tours, Historical Tours
    },
    {
      id: 'g3h4i5j6',
      name: 'The Allure Italy’s Rich Culture, History, And Cuisine.',
      date: '4 Days / 5 Night',
      location: 'Switzerland',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-07-650x450.webp',
      price: 430,
      originalPrice: 470,
      href: 'tour/g3h4i5j6',
      category: [categories[3], categories[5]], // Historical Tours, Luxury Tours
    },
    {
      id: 'k7l8m9n0',
      name: 'Experience the tour of the most adventurous activities.',
      date: '3 Days / 4 Night',
      location: 'Italy',
      previewImg:
        'https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-03-650x450.webp',
      price: 460,
      originalPrice: 500,
      href: 'tour/k7l8m9n0',
      category: [categories[0], categories[4]], // Adventure Tours, Honey Moon Tours
    },
  ],
};
export default MockData;
