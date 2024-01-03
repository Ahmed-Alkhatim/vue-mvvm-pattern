<template>
    <div>
        <Dialog v-model="isDialogVisible">
            <template #activator>
                <Btn size="small" color="primary">إضافة سائق</Btn>
            </template>
            <Card  class="space-y-5 w-[600px]" title = "إضافة سائق">
                <div class="grid grid-cols-2 gap-2">
                    <TextInput v-model="driverData.name" label = "الاسم" :error="inputErrors.name"/>
                    <DateInput v-model="driverData.birth_date" label = "تاريخ الميلاد" :error="inputErrors.name"/>
                </div>
                <NumberInput v-model="driverData.phone" label="رقم الهاتف" :error="inputErrors.phone"/>
                <TextInput v-model="driverData.license_number" label = "الرخصة" :error="inputErrors.name"/>
                <TextInput v-model="driverData.address" label = "العنوان" :error="inputErrors.name"/>
                <div class = "flex justify-end">
                    <div class = "mt-4">
                        <Btn size = "small" color = "primary">إضافة</Btn>
                        <Btn @click = "isDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                    </div>
                </div>
            </Card>
        </Dialog>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Dialog, Btn, Card, TextInput, DateInput, NumberInput } from "@/components"
const isDialogVisible = ref(false)

const driverData = reactive({
    name : "",
    license_number : "",
    birth_date : "",
    address : "",
    phone :  ""
})

const inputErrors = reactive({
    name : "",
    license_number : "",
    birth_date : "",
    address : "",
    phone : ""
})
</script>

<style lang="scss" scoped>

</style>