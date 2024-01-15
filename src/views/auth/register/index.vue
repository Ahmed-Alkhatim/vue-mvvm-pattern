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
const goToNextStep = (step) => {
    currentStep.value = step
}
const inputsError = ref({})

const setInputsErrors = (errors) => { 
    inputsError.value = { ...inputsError.value, ...errors }
}

// Data & Api 
const { registerationData, setType } = useRegDataStates()
const { registerUser, onRegisterSuccess} = useRegApiStates()

// Functions
const completeRegistration = () => {
    registerUser(registerationData)
}
onRegisterSuccess( () => {
    // router.push('/')
})

// Provides
provide('registerationData', registerationData)
provide('inputsError', inputsError)
provide('setInputsErrors', setInputsErrors)
provide('setType', setType)

</script>

<style lang="scss" scoped>

</style>