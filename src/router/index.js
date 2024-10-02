import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/index.vue'),
      },
      {
        path: '/:id',
        name: 'Convidado',
        component: () => import('@/pages/index.vue'),
      },
      {
        path: '/config',
        name: 'Lista',
        component: () => import('@/pages/listaaConvidados.vue'),
      },
      {
        path: '/teste',
        name: 'Teste',
        component: () => import('@/pages/teste.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
