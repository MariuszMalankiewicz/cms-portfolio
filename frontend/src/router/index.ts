import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '@/components/layouts/public/PublicLayout.vue';
const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'Home', component: () => import('@/views/public/Home.vue') },
      { path: '/about', name: 'About', component: () => import('@/views/public/About.vue') },
      { path: '/portfolio', name: 'Portfolio', component: () => import('@/views/public/Portfolio.vue') },
      { path: '/contact', name: 'Contact', component: () => import('@/views/public/Contact.vue') },
      { path: '/login', name: 'Login', component: () => import('@/views/public/Login.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
