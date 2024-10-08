import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
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
      {
        path: 'tours',
        component: () => import('pages/PackageGrid.vue'),
      },
      {
        path: 'tour/:id',
        component: () => import('pages/PackageDetail.vue'),
      },
      {
        path: 'package-grid',
        component: () => import('pages/PackageGrid.vue'),
      },
      {
        path: 'package-category',
        component: () => import('pages/PackageCategory.vue'),
      },
      {
        path: 'package-sidebar',
        component: () => import('pages/PackageSideBar.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
