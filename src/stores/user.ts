import { defineStore } from 'pinia';
import { requestLogin } from 'src/apis/authen';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    async login(username: string, password: string, callback?: () => void) {
      const message = await requestLogin(username, password);
      this.name = !message ? username : '';
      callback?.();
    },
  },
});
