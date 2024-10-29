import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import Games from '../views/Games.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
