<template>
    <div class = "w-[400px]  mt-32 m-auto text-center space-y-6">
        <div class = 'w-full'>
            <p class = 'paragraph text-[18px]'>التسجيل ك :</p>
        </div>
        <div class = "flex justify-center">
            <Btn @click = "selectType('provider')" color="primary">مقدم خدمات</Btn>
            <Btn @click = "selectType('consumer')" color="secondary">مستهلك</Btn>
        </div>
    </div>
</template> 

<script setup>
import { RadioInput, Btn } from "@/components"
import { inject } from "vue";

// Emits && Props && Injects && Stores
const emit =  defineEmits(['complete'])
const setType = inject('setType')

// Functions
const selectType = (type) => {
    setType(type)
    emit('complete')
}

</script>

<style lang="scss" scoped>

</style>