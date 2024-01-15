<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-4">
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model = "registerationData.name" label = "اسم المستخدم" />
                <DateInput v-model = "registerationData.birth_date" label = 'تاريخ الميلاد'/>
            </div>
            <SelectInput v-model = "registerationData.type" label = "نوع المستخدم"  
                :options = "[{id : 'مقدم خدمات', value : 'مقدم خدمات'}, {id : 'مستهلك', value : 'مستهلك'}, {id : ' فرد', value : 'فرد'}]" 
            />
            <TextInput v-model = "registerationData.email" label = "الايميل" />
            <NumberInput v-model = "registerationData.phone" label = "رقم الهاتف" />
            
            <div class="grid grid-cols-2 gap-2">
                <SelectInput v-model = "registerationData.identity_type"  :options = "[{id : 'مواطن', value : 'مواطن'}, {id : 'مقيم', value : 'مقيم'}]" label = "نوع الهوية" />
                <NumberInput v-model = "registerationData.id_number" label = "رقم الهوية" />
            </div>
                <Btn class="w-full" size = "small" color = "primary" @click = "register()">تسجيل</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from "vue"
import { TextInput, DateInput, NumberInput, Btn, SelectInput } from "@/components"

// Props && Emit && Ineject
const registerationData = inject('registerationData')
const emit = defineEmits(['complete'])

// Functions
const register = () => {
    emit('complete')
}
</script>

<style lang="scss" scoped>

</style>