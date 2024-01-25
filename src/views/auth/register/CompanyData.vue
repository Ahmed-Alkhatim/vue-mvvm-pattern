<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-8">
            <TextInput v-model="registerationData.company_name" label = 'اسم الشركة' :errors="inputsError.company_name" />
            <TextInput v-model="registerationData.public_name" label = 'الاسم العام للشركة' :errors="inputsError.public_name"/>
            <TextInput v-model="registerationData.commercial_record" label = 'السجل التحاري  للشركة' :errors="inputsError.commercial_record"/>
            <Btn class="w-full" :class = "{ 'cursor-not-allowed opacity-50' : !canGoToNextStep}" size = "small" color = "primary" @click = "saveData()">التالي</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, watch} from 'vue'
import { TextInput, Btn } from "@/components"
import { validateCompanyData } from "./validators"

const registerationData = inject('registerationData')
const setInputsErrors = inject('setInputsErrors')
const inputsError = inject('inputsError')

const emit = defineEmits(['complete'])
const canGoToNextStep = ref(false)

watch(registerationData, () => {

    const { isCompanyDataValid } = validateCompanyData(registerationData)
    isCompanyDataValid ? canGoToNextStep.value = true : canGoToNextStep.value = false

})

const saveData = () => {

    const { companyDataErrors, isCompanyDataValid } = validateCompanyData(registerationData)

    if(isCompanyDataValid) {
        setInputsErrors({  public_name : [], company_name : [], commercial_record : []})
        emit('complete', )
    } else {
        setInputsErrors(companyDataErrors)
    }

}

</script>

<style lang="scss" scoped>

</style>