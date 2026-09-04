<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import { ref } from "vue";

const posts = ref([]);
const postXpage = 5;
const inicio = ref(0);
const fin = ref(postXpage);

const favorito = ref("");
const cambiarFavorito = (title) => {
  favorito.value = title;
};

const siguiente = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};

const anterior = () => {
  if (inicio.value > 0) {
    inicio.value = inicio.value - postXpage;
    fin.value = fin.value - postXpage;
  }
};

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts.value = data;
    });
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <h2>Mis Post Favoritos: {{ favorito }}</h2>

    <!-- Pasamos las funciones como props o eventos -->
    <PaginatePost
        class="mb-2"
        @siguiente="siguiente"
        @anterior="anterior"
    ></PaginatePost>

    <BlogPost
        v-for="post in posts.slice(inicio, fin)"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"
        :cambiarFavorito="cambiarFavorito"
        class="mb-2"
    ></BlogPost>
  </div>
</template>