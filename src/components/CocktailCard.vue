<template>
  <div class="cocktail-card">
    <router-link :to="`/${cocktailCode}/${cocktail.idDrink}`">
      <img 
        :src="cocktail.strDrinkThumb" 
        :alt="cocktail.strDrink"
        loading="lazy"
        class="cocktail-image"
      >
      <h3>{{ cocktail.strDrink }}</h3>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  cocktail: {
    type: Object,
    required: true
  },
  cocktailCode: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.cocktail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.cocktail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.cocktail-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cocktail-card h3 {
  padding: 1rem;
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.cocktail-card a {
  text-decoration: none;
}
</style>