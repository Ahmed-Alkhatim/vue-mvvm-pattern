<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <ActionBtn type="edit"/>
        </template>
        {{ editBranchData }}
        <Card title="تعديل فرع"  class="space-y-5 w-[600px]">
            <TextInput v-model = "editBranchData.name" label="الإسم " :error="addInputsErrors.name"/>
            <TextInput v-model = "editBranchData.public_name" label="الإسم العام" :error="addInputsErrors.public_name"/>
            <TextInput v-model = "editBranchData.commercial_record" label="السجل التجاري" :error="addInputsErrors.commercial_record"/>
            <TextInput v-model = "editBranchData.bank" label="البنك" :error="addInputsErrors.bank"/>
            <TextInput v-model = "editBranchData.iban" label="الآيبان " :error="addInputsErrors.iban"/>
            <TextInput v-model = "editBranchData.account_number" label="رقم الحساب" :error="addInputsErrors.account_number"/>
            <TextInput v-model = "editBranchData.tax_number" label="رقم الحساب" :error="addInputsErrors.tax_number"/>
            <TextInput v-model = "editBranchData.tax_value" label="الرقم الضريبي" :error="addInputsErrors.tax_value"/>
            <TextInput v-model = "editBranchData.type" label="قيمة الضريبة" :error="addInputsErrors.type"/>
            <TextInput v-model = "editBranchData.address" label="النوع" :error="addInputsErrors.address"/>
            <TextInput v-model = "editBranchData.status" label="النوع" :error="addInputsErrors.status"/>
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
import { onMounted, ref, watch } from 'vue';
import { Dialog, Btn, Card, TextInput, ActionBtn } from "@/components"
import useDataStates from './useDataStates';
import { useAddApiStates } from "./useApiStates"
import { useAddUiStates } from "./useUiStates"
// UI States
const isDialogVisible = ref(false)

// 

const props = defineProps(['data'])
// API && Data States
const { addInputsErrors } = useAddUiStates()
const { editBranchData, setEditBranchData } = useDataStates() 
const { onAddSuccess, onAddFailure } = useAddApiStates()

onAddSuccess( (data) => {
    isDialogVisible.value = false
})

onAddFailure( () => {

})

const add = async() => {
    // await addBranch(addBranchData)
    setEditBranchData(props.data)

}

watch( isDialogVisible, () => {
    setEditBranchData(props.data)
})
</script>

<style lang="scss" scoped>

</style> 