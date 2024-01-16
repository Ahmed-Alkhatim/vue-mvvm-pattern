<template>
    <div>
        <label for="first_name" class="  block mb-2 text-md font-medium text-gray-500 dark:text-white">{{label}}</label>
        <select v-model = "value" id="countries" class="cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="option in options" :value="option.id">{{ option.value }}</option>
        </select>
        <p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400" v-for="error in errors">{{error}}</p>
    </div>

</template>

<script setup>
import { ref, watch } from "vue"
const props = defineProps(['label', 'options', 'modelValue', 'errors'])
const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

watch(value, () => {
    emit('update:modelValue', value.value)
})
</script>

<style lang="scss" scoped>

</style>