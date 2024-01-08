<template>
    <div>
        <div class = "bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
            <div class = "space-y-1">
                <p class = "font-bold text-[18px]">{{ value }}</p>
                <p class = "text-[14px] text-gray-400">{{ title }}</p>
            </div>
            <div class="w-[50px] h-[50px] rounded flex justify-between items-center" :class = "['text-[' +  color + ']']">
                1
            </div>
        </div>
    </div>
</template>

<script setup>
import { Card } from "@/components"
const props = defineProps(["color", "title", "value"])
</script>

<style lang="scss" scoped>

</style>