<script setup>
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

const next = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};

const prev = () => {
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
    <h2>Mis Post Favorito: {{ favorito }}</h2>

    <PaginatePost
        :inicio="inicio"
        :fin="fin"
        @next="next"
        @prev="prev"
        class="mb-2"
    />

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