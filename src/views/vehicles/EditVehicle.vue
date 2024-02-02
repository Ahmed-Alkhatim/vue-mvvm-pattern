<template>
    <Dialog v-model="isAddDialogVisible">
        <template #activator>
            <ActionBtn type="edit" />
        </template>
        <Card  class="space-y-5 w-[600px]" title = "تعديل المركبة">
            <SelectInput v-model="vehicle.name" label = "النوع"  
                :error = "inputsErrors.name"
                :options="[{ id : 'car', value : 'سيارة'}, { id : 'truck', value : 'شاحنة'}, { id : 'motorcycle', value : 'دراجة نارية'}]"
            />
            <div class="grid grid-cols-2 gap-2">
                <TextInput v-model="vehicle.model" label = "الموديل"  :error = "inputsErrors.model"/>
                <TextInput v-model="vehicle.year" label = "السنة"  :error = "inputsErrors.year"/>
            </div>
                <SelectInput v-model="vehicle.fuel_type" label = "نوع الوقود"  :error = "inputsErrors.fuel_type"
                    :options="[{ id : 'petrol', value : 'بنزين'}, { id : 'diesel ', value : 'جاز'}, { id : 'gas ', value : 'غاز'}]"
                />
            <TextInput v-model="vehicle.plate_number" label = "Plate number"  :error = "inputsErrors.plate_number"/>
            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn @click = "edit()" size = "small" color = "primary">تعديل</Btn>
                    <Btn @click = "isAddDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Dialog, Btn, Card, TextInput, SelectInput, ActionBtn } from "@/components"
import { useEditApiStates } from "./useApiStates"
const props = defineProps(['data'])
// States
const isAddDialogVisible = ref(false)
const vehicle = reactive(props.data)
const inputsErrors = ref({})

// UI | Data | API states
const { editVehicle, onEditSuccess, onEditFailure, contentErrors } = useEditApiStates()

// Functions
const edit = () => {
    editVehicle(vehicle)
}

onEditSuccess( () => {})
onEditFailure( () => {
    inputsErrors.value = contentErrors
})


</script>

<style lang="scss" scoped>

</style>