<template>
    <div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
            <input v-model="text" type="text" :id="label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder">
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['modelValue', 'label', 'placeholder'])
const emit = defineEmits([])

const text = ref(props.modelValue)
watch(text, () => {
    emit('update:modelValue', text.value)
})
</script>

<style>

</style>