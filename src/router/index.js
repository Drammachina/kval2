import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CreateView from '../views/CreateView.vue'
import RedactView from '../views/RedactView.vue'
import OdinView from '@/views/OdinView.vue'
import SozdatSoobView from '@/views/SozdatSoobView.vue'
import RedactSoobView from '@/views/RedactSoobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/redact/:id',
      name: 'redact',
      component: RedactView,
    },
    {
      path: '/:id',
      name: 'blog',
      component: OdinView,
    },
    {
      path: '/message/:id',
      name: 'message',
      component: SozdatSoobView,
    },
    {
      path: '/redactmessage/:id',
      name: 'redactmessage',
      component: RedactSoobView,
    },
  ],
})

export default router
