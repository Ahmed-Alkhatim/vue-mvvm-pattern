<template>
<nav class="bg-white dark:bg-gray-900 rounded-lg w-full z-20 top-0 start-0 shadow">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
  <div></div>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="flex text-sm rounded-full md:me-0  dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-12 h-12 rounded-full" :src="user" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      
  </div>
  </div>
</nav>


</template>

<script setup>
import user from "@/assets/images/user.png"
</script>

<style lang="scss" scoped>

</style>