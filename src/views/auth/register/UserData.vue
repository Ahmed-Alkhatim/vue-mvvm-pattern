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
            <TextInput v-model = "registerationData.email" label = "الايميل" :errors = "inputsError.email"/>
            <NumberInput v-model = "registerationData.phone" label = "رقم الهاتف" :errors = "inputsError.phone"/>
            
            <div class="grid grid-cols-2 gap-2">
                <SelectInput v-model = "registerationData.identity_type"  :options = "[{id : 'مواطن', value : 'مواطن'}, {id : 'مقيم', value : 'مقيم'}]" label = "نوع الهوية" :errors = "inputsError.identity_type"/>
                <NumberInput v-model = "registerationData.id_number" label = "رقم الهوية" :errors = "inputsError.id_number"/>
            </div>
            <PasswordInput v-model="registerationData.password" label = "كلمة المرور" :errors = "inputsError.password"/>
            <PasswordInput :errors = "inputsError.password" label=" اعادة كلمة المرور "/>

            <Btn class="w-full" size = "small" color = "primary" @click = "register()">تسجيل</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from "vue"
import { TextInput, DateInput, NumberInput, Btn, SelectInput, PasswordInput } from "@/components"

// Props && Emit && Ineject
const registerationData = inject('registerationData')
const inputsError = inject('inputsError')

const emit = defineEmits(['complete'])

// Functions
const register = () => {
    emit('complete')
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