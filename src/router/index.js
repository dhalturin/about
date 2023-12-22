import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about/cv',
      name: 'cv',
      component: () => import('../views/CV.vue')
    },
    {
      path: '/about/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
  ]
})

export default router
