<template>
    
    <div class="absolute-center">
        <Card class="space-y-5 w-[500px]">
            <img :src= "logo" class="w-20 h-20 block m-auto"/>
            <h3 class="text-center text-[18px] font-bold">تسجيل الدخول</h3>
            <TextInput v-model = "userData.email" label="الايميل" :errors = 'errors.email'/>
            <PasswordInput v-model = "userData.password" label="كلمة المرور" :errors = 'errors.password'/>
            <Btn @click = "logInUser" size="medium" color = 'primary' class="inline-block w-full">{{ isLoading ? 'جاري تسجيل الدخول' : 'تسجيل الدخول' }}</Btn>
            <p class="paragraph text-primary">ليس لديك حساب؟ <RouterLink to="/register"><span class="link sm:inline-flex sm:ms-2 font-bold"> أنشئ حساب الأن</span></RouterLink></p>
            <RouterLink to="/password-reset"><span class="link font-bold"> نسيت كلمة المرور ؟</span></RouterLink>
        </Card>
    </div>
    <!-- //TODO overwrite link styles in tailwind -->
</template>

<script setup>
import { TextInput, PasswordInput,  Card, Btn } from "@/components"
import { useRouter } from "vue-router";
import logo from "@/assets/images/logo.png"
import useDataStates from "./useDataStates";
import useApiStates from "./useApiStates";
import useUiStates from "./useUiStates";

const router = useRouter()

// UI | Data | API States
const { userData } = useDataStates()
const { logIn, onLoginSuccess, onLoginFailure, authData, wrongCredentials } = useApiStates()
const { errors, setErrors } = useUiStates()

const logInUser = () => {
    logIn(userData);
}

onLoginSuccess( () => {
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user)    
    router.push('./')
})

onLoginFailure( () => {
    setErrors(wrongCredentials)
});

</script>

<style lang="scss" scoped> 

</style>