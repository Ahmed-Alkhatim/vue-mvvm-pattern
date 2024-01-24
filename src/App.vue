<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageContainer from './components/PageContainer.vue';
import { useConfig } from "@/composables"

const { isBlankPage } = useConfig()
</script>

<template>
  <div dir="rtl" class=" main w-screen h-screen bg-stone-50">
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
.main  {
  overflow: hidden;
}
</style>
