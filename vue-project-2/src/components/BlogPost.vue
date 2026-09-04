<script setup>

//defineProps(["title","id","body"])

defineProps(({
  title: String,
  id: Number,
  body:{
    type: String,
    default:'Sin descripcion',

  }
}))
</script>

<template>
  <div class="card">
    <div class ="card-body">
      <h5 class="card-title"
      >{{id}}-{{title}}</h5>
      <p>Lorem ipsum dolor sit amet.</p>

    </div>

  </div>
</template>