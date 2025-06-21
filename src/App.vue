<template>
  <div class="app-container">
    <NavMenu />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <suspense>
            <component :is="Component" />
            <template #fallback>
              <div class="loading">Loading...</div>
            </template>
          </suspense>
        </template>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import NavMenu from './components/NavMenu.vue'
</script>

<style scoped>
.app-container {
  max-width: 1024px;
  min-width: 360px;
  display: flex;
  margin: 0 auto;
  padding: 1rem;
}

@media screen and (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
}

/* .main-content {
  padding-left: 2rem;
} */
</style>