import type { CODES } from '@/api/cocktails/cocktailCodes'
import { getCocktailtsByCode } from '@/api/cocktails/getCocktailByCode'
import type { Cocktail } from '@/api/types/Cocktail'
import { defineStore } from 'pinia'

export const useCocktailsStore = defineStore('cocktails', {
  state: () => ({
    cocktails: {} as Record<CODES, Cocktail[]>,
    loading: false,
    error: null
  }),
  actions: {
    async fetchCocktails(cocktailCode: CODES) {
      if (this.cocktails[cocktailCode]) return // Avoid duplicate requests

      this.loading = true
      this.error = null

      return getCocktailtsByCode(cocktailCode).then((res) => {
        this.cocktails[cocktailCode] = res.data.drinks || []
      }).catch((e) => {
        this.error = e
      }).finally((() => {
        this.loading = false
      }))

      // try {
      //   const response = await fetch(
      //     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`
      //   )
      //   const data = await response.json()
      //   this.cocktails[cocktailCode] = data.drinks || []
      // } catch (err) {
      //   this.error = err.message
      // } finally {
      //   this.loading = false
      // }
    }
  }
})