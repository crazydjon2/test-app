<template>
    <div class="cocktail-details">
        <div class="cocktail-header">
            <div>
                <h2 class="cocktail-title">{{ cocktail.strDrink }}</h2>
                <p class="category">{{ cocktail.strCategory }} • {{ cocktail.strAlcoholic }}</p>
                <p class="glass">Served in: {{ cocktail.strGlass }}</p>
            </div>

            <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" loading="lazy" class="cocktail-image">
        </div>

        <div class="instructions">
            <h3>Instructions:</h3>
            <p>{{ cocktail.strInstructions }}</p>
        </div>

        <div class="ingredients">
            <h3>List of ingredients:</h3>
            <ul>
                <li v-for="(ingredient, index) in ingredients" :key="index">
                    {{ ingredient.measure }} {{ ingredient.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Cocktail } from '@/api/types/Cocktail'
import { computed } from 'vue'

const props = defineProps<{ cocktail: Cocktail }>()

const ingredients = computed(() => {
    const result = []
    for (let i = 1; i <= 15; i++) {
        const measure = props.cocktail[`strMeasure${i}` as keyof Cocktail]
        const name = props.cocktail[`strIngredient${i}` as keyof Cocktail]
        if (measure || name) {
            result.push({
                measure: measure?.trim() || '',
                name: name?.trim() || ''
            })
        }
    }
    return result
})
</script>

<style>
.cocktail-details:not(:last-child) {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
}

.cocktail-header {
    display: flex;
}

.cocktail-title {
    width: 100%;
}

.cocktail-image {
    max-width: 20%;
    margin-left: auto;
}
</style>