<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-5">
            <TextInput v-model="registerationData.company_name" label = 'اسم الشركة' :errors="inputsError.company_name" />
            <TextInput v-model="registerationData.public_name" label = 'الاسم العام للشركة' :errors="inputsError.public_name"/>
            <Btn class="w-full" size = "small" color = "primary" @click = "saveData()">التالي</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject} from 'vue'
import { TextInput, Btn } from "@/components"
import { validateCompanyData } from "./validators"

const registerationData = inject('registerationData')
const setInputsErrors = inject('setInputsErrors')
const inputsError = inject('inputsError')

const emit = defineEmits(['complete'])


const saveData = () => {

    const { companyDataErrors, isCompanyDataValid } = validateCompanyData(registerationData)

    if(isCompanyDataValid) {
        emit('complete', )
    } else {
        setInputsErrors(companyDataErrors)
    }
    
}

</script>

<style lang="scss" scoped>

</style>