import { Destination, DestinationDetail } from 'src/types';

interface DataStructure {
  list: Destination[];
  details: { [key: string]: DestinationDetail };
}

const MockData: DataStructure = {
  list: [
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
  ],
  details: {
    india: {
      name: 'India',
      capitalCity: 'Cairo',
      location: [],
      population: '90.5 million',
      language: 'Egyptian Arabic',
      currency: 'Egyptian pound',
      body: "<h2>Welcome To Japan</h2><p>Egypt has one of the longest histories of any country, tracing its heritage along the Nile Delta back to the 6th–4th millennia BCE. Considered a cradle of civilisation, Ancient Egypt saw some of the earliest developments of writing, agriculture, urbanisation, organised religion and central government.[15] Egypt’s long and rich cultural heritage is an integral part of its national identity, which reflects its unique transcontinental location being simultaneously Mediterranean, Middle Eastern and North African.[16] Egypt was an early and important centre of Christianity, but was largely Islamised in the seventh century. Modern Egypt dates back to 1922, when it gained independence from the British Empire as a monarchy. Following the 1952 revolution, Egypt declared itself a republic, and in 1958 it merged with Syria to form the United Arab Republic, which dissolved in 1961.</p><div class='block-gallery q-col-gutter-md row'><img class='col-md-4 col-6' width='952' height='773' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-06.webp' alt='' /><img class='block-image col-md-4 col-6' width='1024' height='654' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-01-1024x654.webp' alt='' /><img class='block-image col-md-4 col-6' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-02.webp' alt='' /><img class='block-image col-md-4 col-6' loading='lazy' decoding='async' width='695' height='772' data-id='428' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-03.webp' alt='' /><img class='block-image col-md-4 col-6' loading='lazy' decoding='async' width='953' height='772' data-id='431' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-04.webp' alt='' /><img class='block-image col-md-4 col-6' loading='lazy' decoding='async' width='1024' height='653' data-id='432' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/gallery-05-1024x653.webp' alt='' /></div><h3>Heaven On Earth</h3><p>Egypt has one of the longest histories of any country, tracing its heritage along the Nile Delta back to the 6th–4th millennia BCE. Considered a cradle of civilisation, Ancient Egypt saw some of the earliest developments of writing, agriculture, urbanisation, organised religion and central government.[15] Egypt’s long and rich cultural heritage is an integral part of its national identity, which reflects its unique transcontinental location being simultaneously Mediterranean, Middle Eastern and North African.[16] Egypt was an early and important centre of Christianity, but was largely Islamised in the seventh century. Modern Egypt dates back to 1922, when it gained independence from the British Empire as a monarchy. Following the 1952 revolution, Egypt declared itself a republic, and in 1958 it merged with Syria to form the United Arab Republic, which dissolved in 1961.</p><ul class='wp-block-list'><li>Exploring ancient ruins, historical landmar.</li><li>Immersive cultural experiences, local.</li><li>Hiking, trekking, extreme sports, and out.</li><li>A romantic destination like Paris, Venice.</li><li>Kid-friendly activities, theme parks family.</li><li>Premium accommodations, gourmet.</li></ul><div class='block-gallery q-col-gutter-md row'><img class='block-image col-md-6 col' loading='lazy' decoding='async' width='650' height='439' data-id='435' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/destination-img-01.webp' alt='' /><img class='block-image col-md-6 col' loading='lazy' decoding='async' width='650' height='439' data-id='436' src='https://triprex.b-cdn.net/wp-content/uploads/2024/02/destination-img-02.webp' alt='' /></div>",
    },
  },
};

export default MockData;
