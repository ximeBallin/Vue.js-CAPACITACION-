<script setup>
//defineProps(["title","id","body"])

defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: 'Sin descripcion',
  },
  cambiarFavorito: Function
})

const emit = defineEmits(['cambiarFavoritoNombre']);

// Si deseas usar la función emit en la lógica de script, se hace así:
// emit('cambiarFavoritoNombre', props.title);


</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{id}}-{{title}}</h5>
      <p>{{body}}</p>
      <button @click="cambiarFavorito(title)" class="btn btn-outline-primary">Favorito</button>
    </div>
  </div>
</template>