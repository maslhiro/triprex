import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { fetchAll } from 'src/apis/tours';
import { Tour } from 'src/types';

export const useTourStore = () => {
  const innerStore = defineStore('tour', {
    state: () => ({
      isInitialized: false,
      list: (LocalStorage.getItem('tour-list') || []) as Tour[],
    }),
    getters: {
      recommend: (state) => state.list?.slice(0, 10),
      bundle: (state) => state.list?.slice(0, 6),
    },
    actions: {
      async fetchAll(callback?: () => void) {
        const result = await fetchAll();
        this.list = result;
        this.isInitialized = true;
        LocalStorage.setItem('tour-list', this.list);
        callback?.();
      },
    },
  });

  const store = innerStore();
  if (!store.isInitialized) {
    store.fetchAll();
  }

  return store;
};
