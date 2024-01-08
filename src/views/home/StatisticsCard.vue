<template>
    <div>
        <div class = "bg-white rounded-lg shadow-sm p-6 flex justify-between items-center">
            <div class = "space-y-1">
                <p class = "font-bold text-[17px]">{{ value }}</p>
                <p class = "text-[14px] text-gray-400">{{ title }}</p>
            </div>
            <div class="w-[40px] h-[40px] rounded-full flex justify-center items-center" :class = "colors.bg[color]">
                <slot :color = "colors.color[color]"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Card } from "@/components"
const props = defineProps(["color", "title", "value"])

const colors = {
    bg :  {
        green : "bg-green-200",
        primary : "bg-stone-200",
        blue : "bg-blue-200",
        red : "bg-red-200",
    },
    color : {
        green : "rgb(74 222 128)",
        primary : "rgb(168 162 158)",
        blue : "rgb(96 165 250)",
        red : "rgb(248 113 113)",
    }
}
</script>

<style lang="scss" scoped>

</style>