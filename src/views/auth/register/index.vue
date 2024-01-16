<template>
    <div class = 'mt-20'>
        <Stepper :currentStep = "currentStep"/>
        <RegisterType v-if = "currentStep == 1"   @complete = "goToNextStep(2)"/>
        <CompanyData v-if = "currentStep == 2"  @complete = "goToNextStep(3)"/>
        <UserData v-if = "currentStep == 3"   @complete = "completeRegistration()"/>
    </div>
</template>

<script setup>
import { provide, ref } from "vue"
import Stepper from './Stepper.vue';
import RegisterType from './RegisterType.vue';
import CompanyData from './CompanyData.vue';
import UserData from "./UserData.vue";
import useRegApiStates from "./useRegApiStates";
import useRegDataStates from "./useRegDataStates";
import { useRouter } from "vue-router";

const router = useRouter()
// UI States
const currentStep = ref(1)
const inputsError = ref({})

const goToNextStep = (step) => { currentStep.value = step }
const setInputsErrors = (errors) => { inputsError.value = { ...inputsError.value, ...errors }}

// Data & Api 
const { registerationData, setType } = useRegDataStates()
const { registerUser, onRegisterSuccess, onRegisterFail } = useRegApiStates()

// Functions
const completeRegistration = () => {
    registerUser(registerationData)
}

onRegisterSuccess( () => {
    router.push('/')
})

onRegisterFail( (errors) => {
const errorsNames = Object.keys(errors)
   console.log(errors)
    if(errorsNames.includes('public_name') || errorsNames.includes('company_name')){
        currentStep.value = 2
    }
    inputsError.value = errors
})

// Provides
provide('registerationData', registerationData)
provide('inputsError', inputsError)
provide('setInputsErrors', setInputsErrors)
provide('setType', setType)

</script>

<style lang="scss" scoped>

</style>