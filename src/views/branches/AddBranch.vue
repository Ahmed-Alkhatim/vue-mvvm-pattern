<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <Btn size="small" color="primary">إضافة فرع</Btn>
        </template>

        <Card title="إضافة فرع"  class="space-y-5 w-[600px]">
            <TextInput v-model = "branchData.name" label="الإسم " :error="errors.name"/>
            <TextInput v-model = "branchData.public_name" label="الإسم العام" :error="errors.public_name"/>
            <TextInput v-model = "branchData.commercial_record" label="السجل التجاري" :error="errors.commercial_record"/>
            <TextInput v-model = "branchData.bank" label="البنك" :error="errors.bank"/>
            <TextInput v-model = "branchData.iban" label="الآيبان " :error="errors.iban"/>
            <TextInput v-model = "branchData.account_number" label="رقم الحساب" :error="errors.account_number"/>
            <TextInput v-model = "branchData.tax_number" label="رقم الحساب" :error="errors.tax_number"/>
            <TextInput v-model = "branchData.tax_value" label="الرقم الضريبي" :error="errors.tax_value"/>
            <TextInput v-model = "branchData.type" label="قيمة الضريبة" :error="errors.type"/>
            <TextInput v-model = "branchData.address" label="النوع" :error="errors.address"/>
            <TextInput v-model = "branchData.status" label="النوع" :error="errors.status"/>
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
import { reactive, ref } from 'vue';
import { Dialog, Btn, Card, TextInput, DateInput, NumberInput } from "@/components"

// States
const isDialogVisible = ref(false)

const branchData = reactive({
    name : "",
    public_name : "",
    public_name : "",
    brand_image : "",
    commercial_record : "",
    commercial_record : "",
    bank : "",
    iban : "",
    account_number : "",
    tax_number : "",
    type : "",
    address : "",
    status : "",
})

const errors = reactive({ 
    name : "",
    public_name : "",
    public_name : "",
    brand_image : "",
    commercial_record : "",
    commercial_record : "",
    bank : "",
    iban : "",
    account_number : "",
    tax_number : "",
    type : "",
    address : "",
    status : "",
})
</script>

<style lang="scss" scoped>

</style>