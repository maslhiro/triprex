import { Destination, DestinationDetail } from 'src/types';
import MockData from './destinationMockData';

export const fetchAll = (): Promise<Destination[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData.list);
    }, 2000);
  });

export const getDetails = (id: string): Promise<DestinationDetail> =>
  new Promise((resolve) => {
    const data = MockData.details[id];
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
