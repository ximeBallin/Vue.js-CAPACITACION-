<script setup>
const name = "Vue dinámico";

//metodo - methods
const handleClick = (message) => {
  console.log(message);
};
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <button v-on:click.right.prevent="handleClick('Texto Right')">
    Activame right
  </button>
  <button @click="handleClick('Texto Left')">Activame left</button>
  <button @click.middle="handleClick('Texto Middle')">Activame middle</button>
</template>

<style>
h1 {
  color: red;
}
</style>