<template>
    <PageContainer>
        <div>
            <AddVehicle />
        </div>
        <div>
            <VTable :heads = '[ "النوع ", "البراند", "الموديل", "نوع الوقود", "السنة", "Plate number", "" ]'>
                <VTableRow v-for = "vehicle in vehiclesStore.vehicles">
                    <td>{{ vehicle.type }}</td>
                    <td>{{ vehicle.brand }}</td>
                    <td>{{ vehicle.model }}</td>
                    <td>{{ vehicle.fuel_type }}</td>
                    <td>{{ vehicle.year }}</td>
                    <td>{{ vehicle.plate_number }}</td>
                    <td class = "flex justify-end">
                        <ActionBtn type="view"/>
                        <EditVehicle :data="vehicle"/>
                        <ActionBtn type="delete"/>
                    </td>
                </VTableRow>
            </VTable>
        </div>
    </PageContainer>
</template>

<script setup>
import { VTable, VTableRow, ActionBtn } from '@/components';
import { useVehiclesStore } from '@/stores';
import AddVehicle from "./AddVehicle.vue"
import EditVehicle from "./EditVehicle.vue"
import { useFetchApiStates } from './useApiStates';
import { onMounted } from 'vue';
import PageContainer from '@/components/PageContainer.vue';

// Store
const vehiclesStore = useVehiclesStore()

// UI | Data | API states
const { fetchVehicles, onFetchFailure, onFetchSuccess, vehicles } = useFetchApiStates()

// Functions
onMounted( () => {
    fetchVehicles()
})

onFetchSuccess( () => {
    vehiclesStore.setVehicles(vehicles)
})

onFetchFailure( () => {})

</script>

<style lang="scss" scoped>

</style>