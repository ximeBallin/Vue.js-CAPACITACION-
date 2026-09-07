import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemones',
      name: 'pokemons',
      component: () => import('../views/pokemonsView.vue')
    },
    {
      path: '/pokemones/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundoView.vue"),
    },
  ]
})

export default router