<template>
    
    <div class="absolute-center">
        <Card class="space-y-5 w-[500px]">
            <img :src= "logo" class="w-20 h-20 block m-auto"/>
            <h3 class="text-center text-[18px] font-bold">استعادة كلمة المرور</h3>
            <TextInput v-model = "userData.email" label="الايميل" :error = 'errors.email'/>
            <Btn size="medium" color = 'primary' class="inline-block w-full"> تأكيد</Btn>
            <p class="paragraph">ليس لديك حساب؟ <RouterLink to="/register"><span class="link sm:inline-flex sm:ms-2 font-bold">تسجيل حساب جديد</span></RouterLink></p>
            <RouterLink to="login"><span class="link font-bold">تسجيل الدخول</span></RouterLink>
        </Card>
    </div>
</template>

<script setup>
import { TextInput, Card, Btn } from "@/components"
import { reactive } from "vue";
import logo from "@/assets/images/logo.png"
const userData = reactive({
    name: null,
    email : null,
})

const errors = {
    name: null,
    email : null,
}


</script>

<style lang="scss" scoped> 

</style>