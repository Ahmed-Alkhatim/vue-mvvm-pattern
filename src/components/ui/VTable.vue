<template>


<div class="relative overflow-x-auto  sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3" v-for = "head in heads">
                    {{ head }}
                </th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</div>

</template>

<script setup>

const props =  defineProps(["heads"])
</script>

<style  >
table td {
    padding: 8px 16px;
}
</style>