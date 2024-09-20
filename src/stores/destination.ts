import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { fetchAll } from 'src/apis/destination';
import { Destination } from 'src/types';

export const useDestinationStore = () => {
  const innerStore = defineStore('destination', {
    state: () => ({
      isInitialized: false,
      list: (LocalStorage.getItem('destination-list') || []) as Destination[],
    }),
    getters: {
      destinationList: (state) => state.list,
      bundle: (state) => state.list.slice(0, 8),
      ourDestination: (state) => state.list?.slice(0, 10),
    },
    actions: {
      async fetchAll(callback?: () => void) {
        const result = await fetchAll();
        this.list = result;
        this.isInitialized = true;
        LocalStorage.setItem('destination-list', this.list);
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
