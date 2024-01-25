<template>
   <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-5">
            <EmailInput v-model = "registerationData.email" label = "الايميل" :errors = "inputsError.email"/>
            <PasswordInput v-model="registerationData.password" label = "كلمة المرور" :errors = "inputsError.password"/>
            <PasswordInput v-model="registerationData.password_confirmation" label=" اعادة كلمة المرور " :errors = "inputsError.password_confirmation"/>
            <Btn class="w-full"  :class = "{ 'cursor-not-allowed opacity-50' : !canGoToNextStep}" size = "medium" color = "primary" @click = "register()">تسجيل</Btn>
        </div>
    </div>
</template>

<script setup>
import { EmailInput, PasswordInput, Btn } from "@/components"
import { ref, inject, watch } from "vue";
import { validateLoginData } from "./validators"
// Props | injects
const registerationData = inject('registerationData')
const inputsError = inject('inputsError')
const setInputsErrors = inject('setInputsErrors')
const emit = defineEmits('complete')


const canGoToNextStep = ref(false)
watch(registerationData, () =>{
    const { isLoginDataValid } = validateLoginData(registerationData)
    isLoginDataValid ? canGoToNextStep.value = true : canGoToNextStep.value = false
} )
const register = () => {
    const { isLoginDataValid, loginDataErrors } = validateLoginData(registerationData)
    if(isLoginDataValid){
        setInputsErrors({email : [], password : [], password_confirmation : [] })
        emit('complete')
    } else {
        setInputsErrors(loginDataErrors)
    }
}
</script>

<style lang="scss" scoped>

</style>