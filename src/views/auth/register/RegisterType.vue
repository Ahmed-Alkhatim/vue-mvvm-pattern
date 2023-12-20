<template>
    <div class = "w-[400px]  mt-32 m-auto text-center space-y-6">
        <div class = 'w-full'>
            <p class = 'paragraph text-[18px]'>التسجيل ك :</p>
        </div>
        <div class = "flex justify-center">
            <RadioInput class = "text-[18px] mx-3" id = 'company'>مقدم خدمات</RadioInput>
            <RadioInput class = "text-[18px] mx-3" id = 'company'>مستهلك</RadioInput>
        </div>
        <Btn size="small" color = 'blue' @click = 'saveData()'>التالي</Btn>
    </div>
</template> 

<script setup>
import { RadioInput, Btn } from "@/components"
const props = defineProps(['currentStep'])
const emit =  defineEmits(['complete'])

const saveData = () => {
    emit('complete')
}
</script>

<style lang="scss" scoped>

</style>