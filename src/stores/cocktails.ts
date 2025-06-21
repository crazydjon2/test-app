import { defineStore } from 'pinia'

export const useCocktailsStore = defineStore('cocktails', {
  state: () => ({
    cocktails: {},
    loading: false,
    error: null
  }),
  actions: {
    async fetchCocktails(cocktailCode) {
      if (this.cocktails[cocktailCode]) return // Avoid duplicate requests
      
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`
        )
        const data = await response.json()
        this.cocktails[cocktailCode] = data.drinks || []
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})