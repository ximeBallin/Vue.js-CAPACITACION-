<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const back = () => {
  router.push('/pokemones')
}

const getData = async () => {
  try {
    const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>
<template>
  <h1>Poke name: {{ $route.params.name }}</h1>
  <button @click="back"></button>
</template>