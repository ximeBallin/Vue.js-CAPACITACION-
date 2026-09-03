<script setup>
import { ref, computed } from "vue";

const name = "Vue dinámico";

const counter = ref(0);
const arrayFavoritos = ref([]);

const increment = () => counter.value++;
const decrement = () => counter.value--;

const reset = () => {
  counter.value = 0;
};

const classCounter = computed(() => {
  if (counter.value === 0) {
    return 'zero';
  }
  if (counter.value > 0) {
    return 'positive';
  }
  if (counter.value < 0) {
    return 'negative';
  }
});

const add = () => {
  arrayFavoritos.value.push(counter.value);
};

const bloquearBtnAdd = computed(() => {
  const numSearch = arrayFavoritos.value.find(num => num === counter.value);
  console.log(numSearch);
  if(numSearch === 0) return true;
  return numSearch ? true : false;
  //return numSearch || numSearch === 0
});
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :class="classCounter">{{ counter }}</h2>
  <button @click="increment">Incremento</button>
  <button @click="decrement">Decremento</button>
  <button @click="reset">Reset</button>
  <button @click="add" :disabled="bloquearBtnAdd">Add</button>
  <br>
  {{ arrayFavoritos }}
  <ul>
    <li
        v-for="(num, index) in arrayFavoritos"
        :key="index"
    >
      {{ num }}
    </li>
  </ul>
</template>

<style>
h1 {
  color: red;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: peru;
}
</style>