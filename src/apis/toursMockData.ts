import { Tour, TourDetail } from 'src/types';
import categories from './categoryMockData';

interface DataStructure {
  list: Tour[];
  details: { [key: string]: TourDetail };
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
  details: {
    a1b2c3d4: {
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

      photos: [
        'https://lipsum.app/id/22',
        'https://lipsum.app/id/67',
        'https://lipsum.app/id/71',
        'https://lipsum.app/id/12',
        'https://lipsum.app/id/56',
        'https://lipsum.app/id/78',
      ],
      videos: [
        {
          source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          preview: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
        },
      ],
      maxPeople: 40,
      description:
        'Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.Choose your destination based on your interests and preferences, whether it’s a cultural experience, a natural adventure, historical exploration, or a beach vacation.\nBook suitable accommodation, which can range from hotels, resorts, hostels, vacation rentals, or even camping depending on your travel style and destination.Arrange transportation to and within your destination. This can include flights, trains, buses, rental cars, or even cruises.',
      included: [
        'Meal As Per Hotel Plan And Drinks Free Too.',
        'Return Airport And Round Trip Transfers.',
        'Accommodation On Twin Sharing Basis.',
        'The Above Rates Are On Per Day Disposal Basi',
        'Enjoy Brussels Day Tours. Overnight Brussels',
      ],
      excluded: [
        'AC Will Not Be Functional On Hills Or Slopes.',
        'Any Other Service Not Mentioned',
        'Additional Entry Fees Other Than Specified',
        'Amsterdam Canal Cruise Not Included For Basic',
      ],
      highlights: [
        'Our Team Of Knowledgeable Guides And Travel Experts Are Dedicated To Making Your Journey Memorable And Worry-Free',
        'Dive Into Rich Cultures And Traditions. Explore Historic Sites, Savor Authentic Cuisine, And Connect With Locals.',
        'We Take Care Of All The Details, So You Can Focus On Creating Memories. Rest Assured That Your Journey Is In Capable Hands Sip Cocktails On The Beach As You Watch The Sun Dip Below The Horizon.',
        ' From Accommodations To Dining Experiences, We Select The Best Partners To Ensure Your Comfort And Enjoyment Throughout Your Journey.',
      ],
      itinerary: [
        {
          name: "Admire Big Ben, Bugkingham Palace And St Paul's Cathedral",
          description:
            'Arrive Cairo airport, welcome greeting by our representative who will assist you and provide tra nsfers to your Hotel in Cairo. (the clients will inform us about their arrival time minimum 7 days before)',
        },
        {
          name: 'Adventure Begin',
          description:
            'Arrive Cairo airport, welcome greeting by our representative who will assist you and provide tra nsfers to your Hotel in Cairo. (the clients will inform us about their arrival time minimum 7 days before)',
        },
        {
          name: 'Visit The Aqueduct And See The Cairo Zoo',
          description:
            'Take a short break by visiting the Aqueduct and the Cairo Zoo. The zoo offers a variety of exhibits, including animals, nature, and the history of Cairo.',
        },
        {
          name: 'Take A Coffee Break In The Old City',
          description:
            'Take a short break by visiting the Old City. It is a beautiful and romantic area with a rich history. The Old City is a place where people gathered for the first time in the 7th century BC.',
        },
        {
          name: 'Visit The Great Wall Of Cairos',
          description:
            'Take a short break by visiting the Great Wall of Cairo. It is a 3,376 miles long wall that stretches across the Mediterranean Sea. The wall was built to protect the city from invasions.',
        },
        {
          name: 'Rest & Return',
          description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
      ],
      faq: [
        {
          question: 'How Do I Book A Trip On Your Website ?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          question: 'What Are The Tour Packages Available?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          question: 'What Is The Price Range For The Tours?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          question: 'What Is The Best Time To Book A Tour?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          question: 'Can I Cancel My Booking Before The Tour Starts?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
      ],
    },
  },
};
export default MockData;
