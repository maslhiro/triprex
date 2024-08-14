import { defineStore } from 'pinia';
import { requestLogin, requestSignUp } from 'src/apis/authen';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    async login(username: string, password: string, callback?: () => void) {
      const result = await requestLogin(username, password);
      this.name = result ? username : '';
      callback?.();
    },
    async register(
      username: string,
      email: string,
      password: string,
      callback?: (result: boolean) => void
    ) {
      const result = await requestSignUp(username, email, password);
      callback?.(result);
    },
  },
});
