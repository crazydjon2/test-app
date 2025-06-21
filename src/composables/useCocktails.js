import { ref } from 'vue'
import { useCocktailsStore } from '@/stores/cocktails'

export function useCocktails() {
  const store = useCocktailsStore()
  const cocktailsLoading = ref(false)
  const error = ref(null)

  const fetchCocktails = async (cocktailCode) => {
    cocktailsLoading.value = true
    error.value = null
    try {
      await store.fetchCocktails(cocktailCode)
    } catch (err) {
      error.value = err.message
    } finally {
      cocktailsLoading.value = false
    }
  }

  return {
    cocktails: store.cocktails,
    cocktailsLoading,
    error,
    fetchCocktails
  }
}