<template>
    <Dialog v-model="isAddDialogVisible">
        <template #activator>
            <Btn size="small" color="primary">إضافة مركبة</Btn>
        </template>
        <Card  class="space-y-5 w-[600px]" title = "إضافة مركبة">
            <SelectInput v-model="addVehiclesData.name" label = "النوع"  
                :error = "inputsErrors.name"
                :options="[{ id : 'car', value : 'سيارة'}, { id : 'truck', value : 'شاحنة'}, { id : 'motorcycle', value : 'دراجة نارية'}]"
            />
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model="addVehiclesData.model" label = "الموديل"  :error = "inputsErrors.model"/>
                <TextInput v-model="addVehiclesData.year" label = "السنة"  :error = "inputsErrors.year"/>
            </div>
                <SelectInput v-model="addVehiclesData.fuel_type" label = "نوع الوقود"  :error = "inputsErrors.fuel_type"
                    :options="[{ id : 'petrol', value : 'بنزين'}, { id : 'diesel ', value : 'جاز'}, { id : 'gas ', value : 'غاز'}]"
                />
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
import { Dialog, Btn, Card, TextInput, SelectInput } from "@/components"
import useUiStates from "./useUiStates"
import useDataStates from "./useDataStates";
import { useAddVehiclesStates } from "./useApiStates"
// UI | Data | API states
const { isAddDialogVisible, setAddDialogVisibility, inputsErrors, setInputsErrors } = useUiStates()
const { addVehiclesData } = useDataStates()
const { addVehicle, onAddSuccess, onAddFailure, addContentErrors }  = useAddVehiclesStates()

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