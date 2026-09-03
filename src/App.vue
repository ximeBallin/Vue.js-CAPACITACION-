<script setup>
const name = "Vue dinámico";

//metodos - methods

const handleClick= ( )=>{
  console.log('me diste clisck')
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <button v-on:click="handleClick()">Activame 1</button>
  <button @on:click="handleClick()">Activame 2</button>
</template>

<style>
h1 {
  color: red;
}
</style>