<template>
    <div class="px-6 pt-8 pb-6 bg-white border  rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <h1 class="text-xl font-bold text-gray-600 mb-6">{{ props.title }}</h1>

        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(['title'])

</script>

<style  scoped>

</style>