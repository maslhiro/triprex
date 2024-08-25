import { Tour } from 'src/types';
import MockData from './toursMockData';

export const fetchAll = (): Promise<Tour[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData.list);
    }, 2000);
  });
