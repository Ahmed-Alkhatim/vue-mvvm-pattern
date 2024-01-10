<template>
    
    <div class="absolute-center">
        <Card class="space-y-5 w-[500px]">
            <img :src= "logo" class="w-20 h-20 block m-auto"/>
            <h3 class="text-center text-[18px] font-bold">تسجيل الدخول</h3>
            <TextInput v-model = "userData.email" label="الايميل" :errors = 'errors.email'/>
            <PasswordInput v-model = "userData.password" label="كلمة المرور" :errors = 'errors.password'/>
            <Btn @click = "logIn" size="medium" color = 'blue' class="inline-block w-full">{{ isLoading ? 'جاري تسجيل الدخول' : 'تسجيل الدخول' }}</Btn>
            <p class="paragraph">ليس لديك حساب؟ <RouterLink to="/register"><span class="link sm:inline-flex sm:ms-2 ">تسجيل حساب جديد</span></RouterLink></p>
            <RouterLink to="/password-reset"><span class="link">نسيت كلمة المرور</span></RouterLink>
        </Card>
    </div>
</template>

<script setup>
import { TextInput, PasswordInput,  Card, Btn } from "@/components"
import { reactive } from "vue";
import logo from "@/assets/images/logo.png"
import { auth } from "@/api"
import { useRouter } from "vue-router";
const router = useRouter()
const userData = reactive({
    password: null,
    email : null,
})

const errors = reactive({
    name: null,
    email : null,
})

auth.on('loggedSuccess', (e) => {
   localStorage.setItem('token', e.detail.token)
   localStorage.setItem('user', e.detail.user)
   router.push('/')

})
auth.on('loggingFail', (e) => {
    console.log('logged failed', e.detail);
    Object.assign(errors, e.detail);
});

const logIn = () => {
    auth.login(userData)
}

</script>

<style lang="scss" scoped> 

</style>