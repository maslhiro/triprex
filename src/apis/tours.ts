import { Tour, TourDetail } from 'src/types';
import MockData from './toursMockData';

export const fetchAll = (): Promise<Tour[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData.list);
    }, 2000);
  });

export const getDetails = (id: string): Promise<TourDetail> =>
  new Promise((resolve) => {
    const data =
      MockData.details.find((d) => d.id === id) ?? MockData.details[0];
    setTimeout(() => {
      resolve(data);
    }, 0);
  });
