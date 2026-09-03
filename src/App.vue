<script setup>
const name = "Vue dinamico"
const obtenerFruta ={
  name: "Manzana",
  proce:"$1.00",
  description:"Una manzana",
  id: 1,

}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  {{obtenerFruta}}
  <ul>
    <li
        v-for="(value, propiedad, index) in obtenerFruta"
        :key="value"
    >
      {{index}} -{{propiedad}}: {{value}}
    </li>

  </ul>
</template>

<style>
h1 {
  color: red;
}
</style>