import { Category } from 'src/types';
import MockData from './categoryMockData';

export const fetchAll = (): Promise<Category[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData);
    }, 2000);
  });
