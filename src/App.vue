<script setup>
const name = "Vue dinámico";
const styleColor = "color: blue";
</script>

<template>
  <h1>Hola {{ name }}</h1>
  <h2 :style="styleColor">Soy azul</h2>
</template>

<style>
h1 {
  color: red;
}
</style>