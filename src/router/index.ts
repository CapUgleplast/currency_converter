import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CurrencyList',
      component: () => import('@/pages/HomeView.vue'),

    },
    {
      path: '/convert',
      name: 'convert',
      component: () => import('@/pages/ConvertView.vue'),

    },
  ]
})

export default router
