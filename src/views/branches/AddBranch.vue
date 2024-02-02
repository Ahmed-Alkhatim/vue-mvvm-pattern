<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <Btn size="small" color="primary">إضافة فرع</Btn>
        </template>

        <Card title="إضافة فرع"  class="space-y-5 w-[600px]">
            <TextInput v-model = "addBranchData.name" label="الإسم " :error="addInputsErrors.name"/>
            <TextInput v-model = "addBranchData.public_name" label="الإسم العام" :error="addInputsErrors.public_name"/>
            <TextInput v-model = "addBranchData.commercial_record" label="السجل التجاري" :error="addInputsErrors.commercial_record"/>
            <TextInput v-model = "addBranchData.bank" label="البنك" :error="addInputsErrors.bank"/>
            <TextInput v-model = "addBranchData.iban" label="الآيبان " :error="addInputsErrors.iban"/>
            <TextInput v-model = "addBranchData.account_number" label="رقم الحساب" :error="addInputsErrors.account_number"/>
            <TextInput v-model = "addBranchData.tax_number" label="رقم الحساب" :error="addInputsErrors.tax_number"/>
            <TextInput v-model = "addBranchData.tax_value" label="الرقم الضريبي" :error="addInputsErrors.tax_value"/>
            <TextInput v-model = "addBranchData.type" label="قيمة الضريبة" :error="addInputsErrors.type"/>
            <TextInput v-model = "addBranchData.address" label="النوع" :error="addInputsErrors.address"/>
            <TextInput v-model = "addBranchData.status" label="النوع" :error="addInputsErrors.status"/>
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn @click = "add" size = "small" color = "primary">إضافة</Btn>
                    <Btn @click = "isDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, Btn, Card, TextInput } from "@/components"
import useDataStates from './useDataStates';
import { useAddApiStates } from "./useApiStates"
import { useAddUiStates } from "./useUiStates"
// UI States
const isDialogVisible = ref(false)

// API && Data States
const { addInputsErrors } = useAddUiStates()
const { addBranchData } = useDataStates() 
const { addBranch, onAddSuccess, onAddFailure } = useAddApiStates()

onAddSuccess( (data) => {
    isDialogVisible.value = false
})

onAddFailure( () => {

})

const add = async() => {
    await addBranch(addBranchData)
}

</script>

<style lang="scss" scoped>

</style> 