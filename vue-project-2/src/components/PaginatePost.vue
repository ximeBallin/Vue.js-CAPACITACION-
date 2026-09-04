<script setup>
defineEmits(['siguiente', 'anterior']);
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="$emit('anterior')" type="button" class="btn btn-outline-primary">Previus</button>
    <button @click="$emit('siguiente')" type="button" class="btn btn-outline-primary">Next</button>
  </div>
</template>