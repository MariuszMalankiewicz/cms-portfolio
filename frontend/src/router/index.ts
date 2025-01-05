import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '@/components/layouts/PublicLayout.vue';
import AdminLayout from '@/components/layouts/AdminLayout.vue';
const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'Home', component: () => import('@/views/Home.vue') },
      { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
      { path: '/project', name: 'Project', component: () => import('@/views/Project.vue') },
      { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
      { path: '/login', name: 'Login', component: () => import('@/views/Login.vue') },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', name: 'Dashboard', component: () => import('@/views/admin/Dashboard.vue') },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
