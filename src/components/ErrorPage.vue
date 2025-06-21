<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Oops! The cocktail you're looking for doesn't exist.</p>
    <router-link to="/">Back to home</router-link>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  padding: 2rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-page h1 {
  font-size: 5rem;
  color: #ff4757;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.error-page a {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.error-page a:hover {
  background-color: #3aa876;
}
</style>