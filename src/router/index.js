import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import SkillView from '@/views/SkillView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFoundView
    },
    {
      path: '/:notFound',
      redirect: { name: 'notfound' }
    }
  ]
})

export default router