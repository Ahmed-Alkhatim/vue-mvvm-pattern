<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-5">
            <TextInput label = "اسم المستخدم" />
            <!-- <TextInput label = "نوع المستخدم" /> -->
            <DateInput label = 'تاريخ الميلاد'/>
            <TextInput label = "الايميل" />
            <NumberInput label = "رقم الهاتف" />
            <NumberInput label = "رقم الهوية" />
            <!-- <NumberInput label = "نوع الهوية" /> -->
            <Btn class="w-full" size = "small" color = "blue" @click = "saveData()">تسجيل</Btn>

        </div>
    </div>
</template>

<script setup>
import { TextInput, DateInput, NumberInput, Btn } from "@/components"

const saveData = () => {
    
}
</script>

<style lang="scss" scoped>

</style>