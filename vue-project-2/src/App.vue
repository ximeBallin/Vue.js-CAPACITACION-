<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
import { ref } from "vue";

const posts = ref([
  { title: "Post 1", id: 1, body: "descripción 1" },
  { title: "Post 2", id: 2, body: "descripción 2" },
  { title: "Post 3", id: 3, body: "descripción 3" },
  { title: "Post 4", id: 4 },
]);
const favorito = ref("");
const cambiarFavorito = (title) => {
  favorito.value = title;
};
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <h2>Mis Post Favoritos: {{ favorito }}</h2>
    <ButtonCounter></ButtonCounter>
    <button-counter></button-counter>

    <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"
        @cambiarFavoritoNombre="cambiarFavorito"
    ></BlogPost>
  </div>
</template>
