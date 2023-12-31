<template>
<div class="relative overflow-x-auto shadow-sd sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right">
        <caption class="p-4 text-lg font-semibold text-left rtl:text-right bg-white  dark:bg-gray-800">
            <Btn size="x-small" color="primary">اضافة هثن</Btn>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Tite
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="a in [1,2,3,4,5,6,]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   value
                </th>
                
            </tr>
        </tbody>
    </table>
</div>


</template>

<script setup>
import { Btn } from "@/components"
</script>

<style lang="scss" scoped>

</style>