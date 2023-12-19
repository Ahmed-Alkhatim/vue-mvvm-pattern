<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div dir="rtl" class="w-screen h-screen bg-stone-50">
    <RouterView />
  </div>
</template>

<style>
html {
  font-family: mainF;
}
@font-face {
  font-family: mainF;
  src: url("./NeoSansArabic.ttf");
}
</style>
