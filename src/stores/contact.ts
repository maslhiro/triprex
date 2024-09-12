import { defineStore } from 'pinia';
import { Contact } from 'src/types';

export const useContactStore = () => {
  const innerStore = defineStore('contact', {
    state: () => ({
      isInitialized: true,
      data: [
        {
          title: 'More Inquiry',
          icon: 'phone',
          desc: '+999-858 624 984',
        },
        {
          title: 'Send Mail',
          icon: 'mail',
          desc: 'info@example.com',
        },
        {
          title: 'Address',
          icon: 'location_on',
          desc: 'House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh',
        },
      ] as Contact[],
    }),
    getters: {
      phone: (state) => state.data?.[0],
      email: (state) => state.data?.[1],
      address: (state) => state.data?.[2],
    },
    actions: {},
  });

  const store = innerStore();
  return store;
};
