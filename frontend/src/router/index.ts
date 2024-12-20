import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '@/components/layouts/public/PublicLayout.vue';
const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'Strona Główna', component: () => import('@/views/public/Home.vue') },
      { path: '/about', name: 'O Mnie', component: () => import('@/views/public/About.vue') },
      { path: '/portfolio', name: 'Portfolio', component: () => import('@/views/public/Portfolio.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
