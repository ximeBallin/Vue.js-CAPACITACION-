<script setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import BlogPost from "@/components/BlogPost.vue";
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <button-counter></button-counter>
    <button-counter></button-counter>

    <blog-post
        title="Post 1"
    />
    <blog-post
        title="Post 2"
    />
    <blog-post
        title="Post 3"
    />
    <blog-post
        title="Post 4"
    />


  </div>


</template>





