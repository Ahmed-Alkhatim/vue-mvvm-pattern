<template>
    <div>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>

    <aside id="default-sidebar" class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-sm" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white  dark:bg-gray-800">
            <a href="/" class="flex items-center space-x-3 mb-16 mt-6 rtl:space-x-reverse">
                <img :src="logo" class="h-8" alt="Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Petro Amyal</span>
            </a>
            <ul class="space-y-2 font-small text-[16px]">
                <li>
                    <RouterLink to = "/" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconHome color="#888"  stroke-width="2"/>
                    <span class="ms-2">الصفحة الرئيسية</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/branches" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconLayersIntersect color="#888"  stroke-width="2"/>
                    <span class="ms-2">الفروع</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/vehicles" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconCar color="#888"  stroke-width="2"/>
                    <span class="ms-2">المركبات</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/drivers" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconRadar color="#888"  stroke-width="2"/>
                    <span class="ms-2">السائقين</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/product" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconDiscountCheck color="#888"  stroke-width="2"/>
                    <span class="ms-2">المنتجات</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/users" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconUsers color="#888"  stroke-width="2"/>
                    <span class="ms-2">الأعضاء</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to = "/transactions" class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IconTransitionLeft color="#888"  stroke-width="2"/>
                    <span class="ms-2">المعاملات</span>
                    </RouterLink>
                </li>
            </ul>
    </div>
    </aside>
    </div>
</template>

<script setup>
import logo from "@/assets/images/logo.png"
import { IconHome, IconLayersIntersect, IconCar, IconRadar, IconDiscountCheck, IconUsers, IconTransitionLeft } from '@tabler/icons-vue';

</script>

<style lang="scss" scoped>

</style>