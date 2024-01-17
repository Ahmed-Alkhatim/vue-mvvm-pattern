<template>
   <Dialog v-model="isAddDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مستخدم</Btn>
        </template>
        <Card  class="space-y-5 w-[600px]" title = "إضافة مستخدم">
            <TextInput v-model="addUserData.name" label="الإسم" :error="errors.name"/>
            <TextInput v-model="addUserData.userable_type" label="النوع" :error="errors.userable_type"/>
            <TextInput v-model="addUserData.email" label="الايميل" :error="errors.email"/>  
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
import { TextInput, Btn, Card, Dialog} from '@/components';
import useDataStates from "./useDataStates"
import useApiStates from './useApiStates';
import useUiStates from "./useUiStates"

// UI | Data | API states
const { isAddDialogVisible, setAddDialogVisibility } = useUiStates()
const { addUserData } = useDataStates()
const { addUser, onAddUserSuccess, onAddUserFailure } = useApiStates()

const add = () => {
    addUser(addUserData)
}

onAddUserSuccess( () => { setAddDialogVisibility(false) })
onAddUserFailure( () => {})

const errors = reactive({
    name : "",
    email : "",
    userable_type : "",
})


</script>

<style lang="scss" scoped>

</style>