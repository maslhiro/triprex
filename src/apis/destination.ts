import { Destination, DestinationDetail } from 'src/types';
import MockData from './destination.json';

export const fetchAll = (): Promise<Destination[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData.list);
    }, 2000);
  });

export const getDetails = (id: string): Promise<DestinationDetail> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: MockData.details.name,
        population: MockData.details.population,
        language: MockData.details.language,
        currency: MockData.details.currency,
        location: [],
        body: MockData.details.body,
      });
    }, 200);
  });
