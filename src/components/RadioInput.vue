<template>
    <div class="flex items-center">
        <input :id="id" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
        <label :for="id" class="ms-2 text-md font-medium text-gray-400 dark:text-gray-500">
            <slot></slot>
        </label>
    </div>
</template>

<script setup>
const props = defineProps(['id']) 
</script>

<style lang="scss" scoped>

</style>