<template>
    <Dialog v-model="isDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مركبة</Btn>
        </template>
        <Card  class="space-y-5 w-[600px]" title = "إضافة مركبة">
            <TextInput v-model="vehicleData.name" label = "النوع"  :error = "errors.name"/>
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model="vehicleData.model" label = "الموديل"  :error = "errors.model"/>
                <TextInput v-model="vehicleData.year" label = "السنة"  :error = "errors.year"/>
            </div>
                <TextInput v-model="vehicleData.fuel_type" label = "نوع الوقود"  :error = "errors.fuel_type"/>
            <TextInput v-model="vehicleData.plate_number" label = "Plate number"  :error = "errors.plate_number"/>
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn size = "small" color = "primary">إضافة</Btn>
                    <Btn @click = "isDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Dialog, Btn, Card, TextInput } from "@/components"
const isDialogVisible = ref(false)

const vehicleData = reactive({
    name : "",
    type : "",
    brand : "",
    model : "",
    fuel_type : "",
    year : "",
    plate_number : ""
})

const errors = reactive({
    name : "",
    type : "",
    brand : "",
    model : "",
    fuel_type : "",
    year : "",
    plate_number : ""
})
</script>

<style lang="scss" scoped>

</style>