<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageContainer from './components/PageContainer.vue';
import { useConfig } from "@/composables"
import { useLoggingStatus } from "@/composables"
import { onMounted } from 'vue';
const { isBlankPage } = useConfig()
useLoggingStatus()

</script>

<template>
  <div dir="rtl" class="bg-gray-50">
    <!-- <PageContainer v-if="isBlankPage"> -->
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
