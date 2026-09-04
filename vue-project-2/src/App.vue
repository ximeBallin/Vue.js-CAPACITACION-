<script>
import {ref} from 'vue'
export default {
  setup(){
    const counter = ref(0);

    const increment = ()=>{
      counter.value ++
    }

    return{
      counter,
      increment
    };

  },
}
</script>

<!--<script setup ></script> -->


<template>
  <h1>APP</h1>
  <button @click="increment">{{counter}}</button>

</template>





