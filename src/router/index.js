import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/main-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form-view.vue')
    }
  ]
})

export default router
