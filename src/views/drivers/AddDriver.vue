<template>
    <div>
        <Dialog v-model="isDialogVisible">
            <template #activator>
                <Btn size="small" color="primary">إضافة سائق</Btn>
            </template>
            <Card  class="space-y-5 w-[600px]" title = "إضافة سائق">
                <div class="grid grid-cols-2 gap-2">
                    <TextInput v-model="driver.name" label = "الاسم" :errors="inputErrors.name"/>
                    <DateInput v-model="driver.birth_date" label = "تاريخ الميلاد" :errors="inputErrors.birth_date"/>
                </div>
                <TextInput v-model="driver.phone" label="رقم الهاتف" :errors="inputErrors.phone"/>
                <TextInput v-model="driver.license_number" label = "الرخصة" :errors="inputErrors.license_number"/>
                <TextInput v-model="driver.address" label = "العنوان" :errors="inputErrors.address"/>
                <div class = "flex justify-end">
                    <div class = "mt-4">
                        <Btn size = "small" color = "primary" @click = "add">إضافة</Btn>
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
import { useAddApiStates } from "./useApiStates"

// States
const isDialogVisible = ref(false)
const driver = reactive({ name : "", license_number : "", birth_date : "", address : "", phone :  "" })
const inputErrors = ref({ name : "", license_number : "", birth_date : "", address : "", phone : "" })

// Data - Api - Ui => composable 
const { addDriver, onAddSuccess, onAddFailure, contentError } = useAddApiStates()

// Methods
const add = () => {
    addDriver( driver )
}

onAddSuccess( () => {})
onAddFailure( () => {
    console.log('failed', contentError);
    inputErrors.value = contentError
})

</script>

<style lang="scss" scoped>

</style>