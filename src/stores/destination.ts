import { defineStore } from 'pinia';
import { LocalStorage, Notify } from 'quasar';
import { fetchAll } from 'src/apis/destination';
import { Destination } from 'src/types';

export const useDestinationStore = () => {
  const innerStore = defineStore('destination', {
    state: () => ({
      isInitialized: false,
      list: (LocalStorage.getItem('destination-list') || {}) as Destination[],
    }),
    getters: {
      destinationList: async (state) => {
        if (!state.isInitialized) {
          await fetchAll();
        }
        return state.list;
      },
      ourDestination: async (state) => {
        if (!state.isInitialized) {
          await fetchAll();
        }
        return state.list?.slice(0, 5);
      },
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

  return innerStore;
};
