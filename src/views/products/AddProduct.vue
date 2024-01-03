<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <Btn size="small" color="primary">إضافة منتج</Btn>
        </template>

        <Card class="space-y-5 w-[600px]" title="إضافة منتج">
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model = "productData.name" label = "الإسم "  :error = "productData.name"/>
                <TextInput v-model = "productData.profile_id" label = "البروفايل"  :error = "productData.profile_id"/>
            </div>
            <TextInput v-model = "productData.price" label = "السعر"  :error = "productData.price"/>
            <TextInput v-model = "productData.description" label = "الوصف"  :error = "productData.description"/>
            <TextInput v-model = "productData.status" label = "الحالة"  :error = "productData.status"/>
            <TextInput v-model = "productData.created_at" label = "تاريخ الإنشاء"  :error = "productData.created_at"/>
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

const productData = reactive({
    name : "",
    profile_id : "",
    price : "",
    description : "",
    status : "",
    created_at : "", 
    updated_at : "",
})

const errors = reactive({ 
    name : "",
    profile_id : "",
    price : "",
    description : "",
    status : "",
    created_at : "", 
    updated_at : "",
 })
</script>

<style lang="scss" scoped>

</style>