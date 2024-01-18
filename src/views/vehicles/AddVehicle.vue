<template>
    <Dialog v-model="isAddDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مركبة</Btn>
        </template>
        {{ inputsErrors }}
        <Card  class="space-y-5 w-[600px]" title = "إضافة مركبة">
            <TextInput v-model="addVehiclesData.name" label = "النوع"  :error = "inputsErrors.name"/>
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model="addVehiclesData.model" label = "الموديل"  :error = "inputsErrors.model"/>
                <TextInput v-model="addVehiclesData.year" label = "السنة"  :error = "inputsErrors.year"/>
            </div>
                <TextInput v-model="addVehiclesData.fuel_type" label = "نوع الوقود"  :error = "inputsErrors.fuel_type"/>
            <TextInput v-model="addVehiclesData.plate_number" label = "Plate number"  :error = "inputsErrors.plate_number"/>
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn @click = "add()" size = "small" color = "primary">إضافة</Btn>
                    <Btn @click = "setAddDialogVisibility(false)" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Dialog, Btn, Card, TextInput } from "@/components"
import useUiStates from "./useUiStates"
import useDataStates from "./useDataStates";
import useApiStates from "./useApiStates"
// UI | Data | API states
const { isAddDialogVisible, setAddDialogVisibility, inputsErrors, setInputsErrors } = useUiStates()
const { addVehiclesData } = useDataStates()
const { addVehicle, onAddSuccess, onAddFailure, addContentErrors }  = useApiStates()

// Functions
const add = () => {
    addVehicle(addVehiclesData)
}

onAddSuccess( () => {
    setAddDialogVisibility(false)   
})
onAddFailure( () => {
    setInputsErrors(addContentErrors)
})



</script>

<style lang="scss" scoped>

</style>