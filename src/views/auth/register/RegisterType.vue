<template>
    <div class = "w-[400px] m-auto text-center space-y-6 mt-32">
        <div class = 'w-full'>
            <p class = 'paragraph text-[18px] mb-10'>التسجيل ك :</p>
        </div>
        <div class = "flex justify-center">
            <Btn @click = "selectType('provider')" color="primary">مقدم خدمات</Btn>
            <Btn @click = "selectType('consumer')" color="success">مستهلك</Btn>
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