<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <Btn size="small" color="primary">إضافة فرع</Btn>
        </template>

        <Card title="إضافة فرع"  class="space-y-5 w-[600px]">
            <TextInput v-model = "branchAddData.name" label="الإسم " :error="addInputsErrors.name"/>
            <TextInput v-model = "branchAddData.public_name" label="الإسم العام" :error="addInputsErrors.public_name"/>
            <TextInput v-model = "branchAddData.commercial_record" label="السجل التجاري" :error="addInputsErrors.commercial_record"/>
            <TextInput v-model = "branchAddData.bank" label="البنك" :error="addInputsErrors.bank"/>
            <TextInput v-model = "branchAddData.iban" label="الآيبان " :error="addInputsErrors.iban"/>
            <TextInput v-model = "branchAddData.account_number" label="رقم الحساب" :error="addInputsErrors.account_number"/>
            <TextInput v-model = "branchAddData.tax_number" label="رقم الحساب" :error="addInputsErrors.tax_number"/>
            <TextInput v-model = "branchAddData.tax_value" label="الرقم الضريبي" :error="addInputsErrors.tax_value"/>
            <TextInput v-model = "branchAddData.type" label="قيمة الضريبة" :error="addInputsErrors.type"/>
            <TextInput v-model = "branchAddData.address" label="النوع" :error="addInputsErrors.address"/>
            <TextInput v-model = "branchAddData.status" label="النوع" :error="addInputsErrors.status"/>
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn @click = "addBranch" size = "small" color = "primary">إضافة</Btn>
                    <Btn @click = "isDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Dialog, Btn, Card, TextInput, DateInput, NumberInput } from "@/components"
import useDataStates from './useDataStates';
import useApiStates from "./useApiStates"
// UI States
const isDialogVisible = ref(false)

// API && Data States
const { branchAddData } = useDataStates() 
const { addInputsErrors, addBranch, afterAddingBranch } = useApiStates()

afterAddingBranch( () => {
    isDialogVisible.value = false
})

</script>

<style lang="scss" scoped>

</style> 