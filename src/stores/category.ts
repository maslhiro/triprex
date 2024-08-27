import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { fetchAll } from 'src/apis/category';
import { Category, Tour } from 'src/types';

export const useCategoryStore = () => {
  const innerStore = defineStore('category', {
    state: () => ({
      isInitialized: false,
      list: (LocalStorage.getItem('category-list') || []) as Category[],
    }),
    getters: {
      recommend: (state) => state.list?.slice(0, 6),
    },
    actions: {
      async fetchAll(callback?: () => void) {
        const result = await fetchAll();
        this.list = result;
        this.isInitialized = true;
        LocalStorage.setItem('category-list', this.list);
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
