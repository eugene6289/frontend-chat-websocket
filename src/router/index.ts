// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login.vue';
import Chat from '../pages/Chat.vue';
import Home from '../pages/Home.vue';
import Register from '@/pages/register.vue';

const routes: RouteRecordRaw[] = [
  { path: '/Register', component: Register },
  { path: '/login', component: Login },
  { path: '/chat', component: Chat, meta: { requiresAuth: true } },
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 路由守衛
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;
