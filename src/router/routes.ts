import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'contact',
        component: () => import('pages/Contact.vue'),
      },
      {
        path: 'my-account',
        component: () => import('pages/MyAccount.vue'),
      },
      {
        path: 'destination',
        component: () => import('pages/Destination.vue'),
      },
      {
        path: 'destination/:id',
        component: () => import('pages/DestinationDetail.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
