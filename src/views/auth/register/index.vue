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

// States
const currentStep = ref(1)
const goToNextStep = (step) => {
    currentStep.value = step
}

const { registerationData, setType } = useRegDataStates()
const { registerUser, inputsError } = useRegApiStates()

provide('registerationData', registerationData)
provide('inputsError', inputsError)
provide('setType', setType)

const completeRegistration = () => {
    registerUser(registerationData)
}

</script>

<style lang="scss" scoped>

</style>