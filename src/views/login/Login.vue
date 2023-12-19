<template>
    <div class="w-50 m-auto">
        <TextInput v-model = "userData.name" label="الاسم" />
    </div>
</template>

<script setup>
import { TextInput } from "@/components"
import { reactive } from "vue";

const userData = reactive({
    'name': null,
})
</script>

<style lang="scss" scoped> 

</style>