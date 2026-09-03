<script setup>
import {ref, computed} from "vue";

const name = "Vue dinámico";

const counter = ref(0);


const increment = ()=> counter.value++

const decrement = ()=> counter.value --

const reset = ()=> counter.value === 0

const classCounter = computed(()=>{
  if(counter.value === 0){
    return 'zero'
  }
  if(counter.value > 0){
    return 'positive'
  }
  if(counter.value < 0){
    return 'negative'
  }
});


</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  <h2 :class="counter > 0 ? 'positive' : 'negative'" >{{counter}}</h2>
  <button @click="increment">Incremento</button>
  <button @click="decrement">Decremento</button>
  <button @click="increment">Reset</button>
  <button :disabled="false">Add</button>

</template>

<style>
h1{
  color:red;
}
.positive{
  color:green;
}
.negative{
  color:red;
}
.zero{
  color:peru;
}
</style>