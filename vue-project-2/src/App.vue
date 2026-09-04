<script setup>
import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import { ref, onMounted } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const posts = ref([]);
const postXpage = 5;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

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

onMounted(async () => {
  loading.value = true;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }
});
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <div class="container" v-else>
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