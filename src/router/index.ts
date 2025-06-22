import { CODES } from '@/api/types/cocktailCodes'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { cocktailCodes } from './cocktailCodes'

const routes = [
  {
    path: '/',
    redirect: `/${cocktailCodes[0]}`,
  },
  {
    path: '/:cocktailCode',
    name: 'cocktail',
    component: () => import('../views/CocktailView.vue'),
    beforeEnter: (to: RouteLocationNormalized) => {
      if (!cocktailCodes.includes(to.params.cocktailCode as CODES)) {
        return { name: '404' }
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../components/ErrorPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
