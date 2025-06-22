<template>
  <nav class="nav-menu">
    <router-link v-for="code in cocktailCodes" :key="code" :to="`/${code}`"
      :class="{ active: $route.params.cocktailCode === code }">
      {{ formatCocktailName(code) }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { CODES } from '@/api/types/cocktailCodes'
import { cocktailCodes } from '@/router/cocktailCodes'

const formatCocktailName = (code: CODES) => {
  return code.charAt(0).toUpperCase() + code.slice(1)
}
</script>

<style lang="scss" scoped>
.nav-menu {
  height: fit-content;
  position: sticky;
  top: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem;
  border-right: 1px solid #eeeeee00;
  margin-bottom: 2rem;
  background: $bg-color-1;
}

.nav-menu a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-menu a.active {
  background-color: $bg-color-2;
}

.nav-menu a:hover:not(.active) {
  background-color: $bg-color-2;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    flex-direction: row;
    justify-content: center;
    overflow: auto;
  }
}
</style>
