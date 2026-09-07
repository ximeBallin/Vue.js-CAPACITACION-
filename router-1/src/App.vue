<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-light bg-light px-4 bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
            src="@/assets/logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top me-2"
        />
        PokeAPI
      </router-link>

      <div class="d-flex gap-2">
        <router-link to="/" class="btn" active-class="btn-primary" exact-active-class="btn-primary">
          Home
        </router-link>
        <router-link to="/pokemones" class="btn" active-class="btn-primary" exact-active-class="btn-primary">
          Pokemons
        </router-link>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />
  </div>
</template>

<style scoped>
/* Forzamos que los botones de navegación inactivos parezcan texto plano oscuro */
.navbar .btn:not(.btn-primary) {
  color: #495057;
  background-color: transparent;
  border: none;
}

.navbar .btn:not(.btn-primary):hover {
  color: #0d6efd;
}
</style>