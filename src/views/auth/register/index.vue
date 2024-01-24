<template>
    <div class='mt-20'>
        <Stepper :currentStep="currentStep" />
        <RegisterType v-if="currentStep == 1" @complete="goToNextStep(2)" />
        <CompanyData v-if="currentStep == 2" @complete="goToNextStep(3)" />
        <UserData v-if="currentStep == 3" @complete="goToNextStep(4)" />
        <LoginData v-if="currentStep == 4" @complete="completeRegistration()" />
    </div>
</template>

<script setup>
import { provide, ref } from "vue"
import Stepper from './Stepper.vue';
import RegisterType from './RegisterType.vue';
import CompanyData from './CompanyData.vue';
import UserData from "./UserData.vue";
import LoginData from "./LoginData.vue";
import useRegApiStates from "./useRegApiStates";
import useRegDataStates from "./useRegDataStates";
import { useRouter } from "vue-router";

const router = useRouter()
// UI States
const currentStep = ref(1)
const inputsError = ref({})

const goToNextStep = (step) => { currentStep.value = step }
const setInputsErrors = (errors) => { inputsError.value = { ...inputsError.value, ...errors } }

// Data & Api 
const { registerationData, setType } = useRegDataStates()
const { registerUser, onRegisterSuccess, onRegisterFail } = useRegApiStates()

// Functions
const completeRegistration = () => {
    registerUser(registerationData)
}

onRegisterSuccess(() => {
    router.push('/')
})

onRegisterFail((errors) => {
    const errorsNames = Object.keys(errors)
    const companyDataInputs = ['public_name', 'company_name', 'commercial_record']
    const userDataInputs = ['name', 'birth_date', 'phone', 'identity_type', 'id_number']

    if (errorsNames.filter(error => companyDataInputs.includes(error)).length > 0) {
        currentStep.value = 2
    } else if (errorsNames.filter(error => userDataInputs.includes(error)).length > 0) {
        currentStep.value = 3
    }

    inputsError.value = errors
})

// Provides
provide('registerationData', registerationData)
provide('inputsError', inputsError)
provide('setInputsErrors', setInputsErrors)
provide('setType', setType)

</script>

<style lang="scss" scoped></style>