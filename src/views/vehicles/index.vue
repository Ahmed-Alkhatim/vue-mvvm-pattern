<template>
    <div>
        <div>
            <AddVehicle />
        </div>
        <div>
            <VTable :heads = '[ "النوع ", "البراند", "الموديل", "نوع الوقود", "السنة", "Plate number" ]'>
                <VTableRow v-for = "vehicle in vehiclesStore.vehicles">
                    <td>{{ vehicle.type }}</td>
                    <td>{{ vehicle.brand }}</td>
                    <td>{{ vehicle.model }}</td>
                    <td>{{ vehicle.fuel_type }}</td>
                    <td>{{ vehicle.year }}</td>
                    <td>{{ vehicle.plate_number }}</td>
                </VTableRow>
            </VTable>
        </div>
    </div>
</template>

<script setup>
import { VTable, VTableRow } from '@/components';
import { useVehiclesStore } from '@/stores';
import AddVehicle from "./AddVehicle.vue"
import useApiStates from './useApiStates';
import { onMounted } from 'vue';

// Store
const vehiclesStore = useVehiclesStore()

// UI | Data | API states
const { fetchVehicles, onFetchFailure, onFetchSuccess } = useApiStates()

// Functions
onMounted( () => {
    fetchVehicles()
})

onFetchSuccess( () => {})
onFetchFailure( () => {})

</script>

<style lang="scss" scoped>

</style>