<template>
<div >
    <Sidebar />
    <div class="px-6 p-4 sm:mr-64 space-y-8 ">
        <Navbar />
        <!-- border-2 border-gray-200 border-dashed -->
        <div class="rounded-lg dark:border-gray-700 h-4/5">
            <slot></slot>
        </div>
    </div>

</div>
</template>

<script setup>
import { Navbar } from "@/components"
import { Sidebar } from "@/components"

</script>

<style scoped>

</style>