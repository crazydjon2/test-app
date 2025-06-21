import { createRouter, createWebHistory } from 'vue-router'

const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir']

const routes = [
  {
    path: '/',
    redirect: `/${cocktailCodes[0]}`
  },
  {
    path: '/:cocktailCode',
    name: 'cocktail',
    component: () => import('../views/CocktailView.vue'),
    beforeEnter: (to) => {
      if (!cocktailCodes.includes(to.params.cocktailCode)) {
        return { name: '404' }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../components/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router