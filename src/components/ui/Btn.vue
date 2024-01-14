<template>
    <button type="button" 
        class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600"
        :class="getColor(color) + ' ' + getSize(size)"
    >
    <!-- //TODO size -->
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps(['size', 'color'])

const getColor = (text)  => {
    const color = {
        primary : 'text-white bg-[#5C8374] hover:bg-[#5C8374]',
        secondary : 'border border-gray-300 text-gray-400 hover:bg-gray-400 hover:text-white',
        success  : 'text-white bg-green-700  hover:bg-green-800',
        error : ' text-white bg-red-700 hover:bg-red-800',
        blue : "text-white bg-blue-700 hover:bg-blue-800",
    }

    return color[text]
}

const getSize = (text) => {
    const size = {
        'x-small' : 'px-3 py-2 text-xs',
        'small' : 'px-[20px] py-[8px] text-sm font-bold',
        'medium' : 'px-5 py-2.5 text-sm font-bold',
        'large' : 'px-5 py-3 text-base',
        'x-large' : 'px-6 py-3.5 text-base',
    }
    return size[text]
}

</script>

<style lang="scss" scoped>

</style>