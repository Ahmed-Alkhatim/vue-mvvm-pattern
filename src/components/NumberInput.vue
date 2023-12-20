<template>
    <div>
        <div>
            <label for="first_name" class="block mb-2 text-md font-medium text-gray-500 dark:text-white">{{label}}</label>
            <input v-model="text" type="number" :id="label" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder">
            <p v-if="error" id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{{error}}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['modelValue', 'label', 'placeholder', 'error'])
const emit = defineEmits([])

const text = ref(props.modelValue)
watch(text, () => {
    emit('update:modelValue', text.value)
})
</script>

<style>

</style>