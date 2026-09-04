<script setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import BlogPost from "@/components/BlogPost.vue";
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <button-counter></button-counter>
    <button-counter></button-counter>

    <blog-post title="Post 1" :id="1" body="descripcion 1" />
    <blog-post title="Post 2" :id="2" body="descripcion 2" />
    <blog-post title="Post 3" :id="3" body="descripcion 3" />
    <blog-post title="Post 4" :id="4" body="descripcion 4" />



  </div>


</template>





