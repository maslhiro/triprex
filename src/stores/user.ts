import { defineStore } from 'pinia';
import { LocalStorage, Notify } from 'quasar';
import { requestLogin, requestSignUp } from 'src/apis/authen';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: (LocalStorage.getItem('user') || '') as string,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    async login(username: string, password: string, callback?: () => void) {
      const result = await requestLogin(username, password);
      this.name = result ? username : '';
      LocalStorage.setItem('user', this.name);
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
    logout() {
      this.name = '';
      LocalStorage.removeItem('user');
      Notify.create({
        type: 'positive',
        position: 'top-right',
        message: 'Bye bye',
      });
    },
  },
});
