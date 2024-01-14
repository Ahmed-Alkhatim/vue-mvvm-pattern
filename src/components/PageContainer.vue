<template>
<div >
    <Sidebar />
    <div class="page-container px-6 pb-4 py-2 sm:mr-64 space-y-8  h-screen overflow-scroll">
        <Navbar />
        <!-- border-2 border-gray-200 border-dashed -->
        <div class="rounded-lg dark:border-gray-700">
            <slot></slot>
        </div>
    </div>

</div>
</template>

<script setup>
import { Navbar } from "@/components"
import { Sidebar } from "@/components"

</script>

<style>
.page-container::-webkit-scrollbar {
  width: 0px;
}
</style>