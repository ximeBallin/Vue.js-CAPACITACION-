<script setup>
const emit = defineEmits(["next", "prev"]);

const activarSiguiente = () => {
  console.log("me diste a siguiente");
  emit("next");
};
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
        @click="emit('prev')"
        type="button"
        class="btn btn-outline-primary"
    >
      Previus
    </button>
    <button
        @click="activarSiguiente"
        type="button"
        class="btn btn-outline-primary"
    >
      Next
    </button>
  </div>
</template>