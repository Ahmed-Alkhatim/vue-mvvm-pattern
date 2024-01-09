<template>
   <Dialog v-model="isDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مستخدم</Btn>
        </template>
        <Card  class="space-y-5 w-[600px]" title = "إضافة مستخدم">
            <TextInput v-model="userData.name" label="الإسم" :error="errors.name"/>
            <TextInput v-model="userData.userable_type" label="النوع" :error="errors.userable_type"/>
            <TextInput v-model="userData.email" label="الايميل" :error="errors.email"/>  
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
import { TextInput, Btn, Card, Dialog} from '@/components';

const isDialogVisible = ref(false)
const userData = reactive({
    name : "",
    email : "",
    userable_type : "",
})

const errors = reactive({
    name : "",
    email : "",
    userable_type : "",
})


</script>

<style lang="scss" scoped>

</style>