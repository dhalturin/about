import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CV.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
  ]
})

router.beforeEach((to, from) => {
  let fallback = sessionStorage.getItem('fallback')

  if (fallback && fallback !== location.href) {
    fallback = new URL(fallback)

    const base = import.meta.env.BASE_URL //.replace(/.$/, '')
    const path = fallback.pathname.replace(base, '')

    sessionStorage.removeItem('fallback')

    return path
  }

  return true
})

export default router
