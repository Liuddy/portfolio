import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ListView from '@/views/ListView.vue'
import ProjectView from '@/views/ProjectView.vue'
import DescriptionView from '@/views/project/DescriptionView.vue'
import IllustrationView from '@/views/project/IllustrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },

    {
      path: '/list',
      name: 'list',
      component: ListView
    },

    {
      path: '/project/:id',
      component: ProjectView,
      props: true,
      children: [

        {
          path: '',
          name: 'project',
          redirect: { name: 'description' }
        },

        {
          path: 'description',
          name: 'description',
          component: DescriptionView
        },

        {
          path: 'illustration',
          name: 'illustration',
          component: IllustrationView
        }

      ]
    }
    
  ]
})

export default router