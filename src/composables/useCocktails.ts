import { ref } from 'vue'
import { useCocktailsStore } from '@/stores/cocktails'
import type { CODES } from '@/api/types/cocktailCodes'

export function useCocktails() {
  const store = useCocktailsStore()
  const cocktailsLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchCocktails = async (cocktailCode: CODES) => {
    cocktailsLoading.value = true
    error.value = null
    try {
      await store.fetchCocktails(cocktailCode)
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err?.message
      } else if (typeof err === 'string') {
        error.value = err
      } else {
        console.error('An unknown error occurred.')
      }
    } finally {
      cocktailsLoading.value = false
    }
  }

  return {
    cocktails: store.cocktails,
    cocktailsLoading,
    error,
    fetchCocktails,
  }
}
