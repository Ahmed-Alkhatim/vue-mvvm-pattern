<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-4">
            <div class="grid grid-cols-2 gap-2">
                <TextInput label = "اسم المستخدم" />
                <DateInput label = 'تاريخ الميلاد'/>
            </div>
            <SelectInput label = "نوع المستخدم"  :options = "[{id : '1', value : 'الاسم'}]" />
            <TextInput label = "الايميل" />
            <NumberInput label = "رقم الهاتف" />
            
            <div class="grid grid-cols-2 gap-2">
                <SelectInput v-model="userData.id_type" :options = "[{id : '1', value : 'الاسم'}]" label = "نوع الهوية" />
                <NumberInput label = "رقم الهوية" />
            </div>
            
                <Btn class="w-full" size = "small" color = "blue" @click = "saveData()">تسجيل</Btn>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue"
import { TextInput, DateInput, NumberInput, Btn, SelectInput } from "@/components"

const userData = reactive({
    id_type : ""
})
const saveData = () => {
    
}
</script>

<style lang="scss" scoped>

</style>