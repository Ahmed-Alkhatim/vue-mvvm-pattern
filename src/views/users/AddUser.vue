<template>
   <Dialog v-model="isAddDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مستخدم</Btn>
        </template>
        <Card  class="space-y-5 w-[600px]" title = "إضافة مستخدم">
            <TextInput v-model="user.name" label="الإسم" :errors="inputErrors.name"/> 

            <SelectInput v-model="user.userable_type" label="النوع" 
                :options="[{ id : 'manager', value : 'مدير'}, { id : 'supervisor', value : 'مشرف'}, { id : 'employee', value : 'موظف'}]"
                :errors="inputErrors.userable_type"
            />
            <TextInput v-model="user.email" label="الايميل" :errors="inputErrors.email"/>  
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn size = "small" color = "primary" @click = "add()">إضافة</Btn>
                    <Btn @click = "setAddDialogVisibility(false)" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div> 
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { TextInput, SelectInput, Btn, Card, Dialog} from '@/components';
import useDataStates from "./useDataStates"
import { useAddApiStates } from './useApiStates';
import useUiStates from "./useUiStates"

// States 
const inputErrors = reactive({ name : "", email : "", userable_type : "" })
const user = reactive({  name : "", email : "", userable_type : ""})

// UI  - Data - API => composable
const { isAddDialogVisible, setAddDialogVisibility } = useUiStates()
const { addUser, onAddFailure, onAddSuccess, contentError } = useAddApiStates()

const add = () => {
    addUser(user)
}

onAddSuccess( () => { setAddDialogVisibility(false) })
onAddFailure( () => { 
    Object.assign( inputErrors, contentError )
})

</script>

<style lang="scss" scoped>

</style>