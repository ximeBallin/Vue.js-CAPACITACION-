<script setup>
const name = "Vue dinámico";

let counter = 0;

const increment = () => {
  console.log("aumentar contador");
  counter++;
  console.log(counter);
};
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment">Aumentar</button>
</template>

<style>
h1 {
  color: red;
}
</style>