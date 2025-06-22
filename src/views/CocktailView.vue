<template>
  <div class="cocktail-view">
    <h1>{{ formattedCocktailName }}</h1>

    <div v-if="cocktailsLoading" class="loading">Loading cocktails...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="!cocktailsByCode.length" class="no-results">No cocktails found</div>

    <div v-else class="cocktail-list">
      <CocktailDetails
        v-for="cocktail in cocktailsByCode"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCocktails } from '@/composables/useCocktails.ts'
import CocktailDetails from '@/components/CocktailDetails.vue'
import { CODES } from '@/api/types/cocktailCodes'

const route = useRoute()
const { cocktails, cocktailsLoading, error, fetchCocktails } = useCocktails()

const cocktailsByCode = computed(() => {
  return cocktails[route.params.cocktailCode as CODES] || []
})

const formattedCocktailName = computed(() => {
  return route.params.cocktailCode.charAt(0).toUpperCase() + route.params.cocktailCode.slice(1)
})

watch(
  () => route.params.cocktailCode,
  (newCode) => {
    if (newCode) fetchCocktails(newCode as CODES)
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.cocktail-view {
  padding: 1rem;
}

.cocktail-list {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.loading,
.error,
.no-results {
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
}

.error {
  color: $error-color;
}
</style>
