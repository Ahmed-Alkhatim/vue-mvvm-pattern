<template>
    <div class="w-1/3 flex justify-center m-auto user-form">
        <div class="w-full  space-y-4  mt-12">
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model = "registerationData.name" label = "اسم المستخدم" :errors = "inputsError.name"/>
                <DateInput v-model = "registerationData.birth_date" label = 'تاريخ الميلاد' :errors = "inputsError.birth_date"/>
            </div>
            <SelectInput v-model = "registerationData.type" label = "نوع المستخدم"  
                :options = "[{id : 'مقدم خدمات', value : 'مقدم خدمات'}, {id : 'مستهلك', value : 'مستهلك'}, {id : ' فرد', value : 'فرد'}]" :errors = "inputsError.type"
            />
            <EmailInput v-model = "registerationData.email" label = "الايميل" :errors = "inputsError.email"/>
            <NumberInput v-model = "registerationData.phone" label = "رقم الهاتف" :errors = "inputsError.phone"/>
            
            <div class="grid grid-cols-2 gap-2">
                <SelectInput v-model = "registerationData.identity_type"  :options = "[{id : 'مواطن', value : 'مواطن'}, {id : 'مقيم', value : 'مقيم'}]" label = "نوع الهوية" :errors = "inputsError.identity_type"/>
                <NumberInput v-model = "registerationData.id_number" label = "رقم الهوية" :errors = "inputsError.id_number"/>
            </div>
            <PasswordInput v-model="registerationData.password" label = "كلمة المرور" :errors = "inputsError.password"/>
            <PasswordInput v-model="registerationData.password_confirmation" label=" اعادة كلمة المرور " :errors = "inputsError.password_confirmation"/>

            <Btn class="w-full"  :class = "{ 'cursor-not-allowed opacity-50' : !canGoToNextStep}" size = "small" color = "primary" @click = "register()">تسجيل</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, watch } from "vue"
import { EmailInput, TextInput, DateInput, NumberInput, Btn, SelectInput, PasswordInput } from "@/components"
import { validateUserData } from "./validators"

// States
const canGoToNextStep = ref(false)

// Props && Emit && Ineject
const registerationData = inject('registerationData')
const inputsError = inject('inputsError')
const setInputsErrors = inject('setInputsErrors')

const emit = defineEmits(['complete'])

watch(registerationData, () => {
    const { isUserDataValid } = validateUserData(registerationData)
    isUserDataValid ? canGoToNextStep.value = true : canGoToNextStep.value = false
})
 
// Functions
const register = () => {
    const { isUserDataValid, userDataErrors } = validateUserData(registerationData)
    console.log(userDataErrors);
    if(isUserDataValid) {
        emit('complete')
    } else {
        setInputsErrors(userDataErrors)
    }
}
</script>

<style scoped>
.user-form {
    height: calc(100vh - 170px) ;
    padding-bottom: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 30px;
}
.user-form::-webkit-scrollbar {
    width: 0px;
}
</style>