<template>
    <div class = 'mt-20'>
        <Stepper :currentStep = "currentStep"/>
        <RegisterType v-if = "currentStep == 1" :currentStep = "currentStep"  @complete = "goToNextStep(2)"/>
        <CompanyData v-if = "currentStep == 2" :currentStep = "currentStep" @complete = "goToNextStep(3)"/>
        <UserData v-if = "currentStep == 3" :currentStep = "currentStep"  @complete = "completeRegistration()"/>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Stepper from './Stepper.vue';
import RegisterType from './RegisterType.vue';
import CompanyData from './CompanyData.vue';
import UserData from "./UserData.vue";

const currentStep = ref(1)
const goToNextStep = (step) => {
    currentStep.value = step
}

const completeRegistration = () => {

}

</script>

<style lang="scss" scoped>

</style>