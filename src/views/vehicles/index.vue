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

const vehiclesStore = useVehiclesStore()
</script>

<style lang="scss" scoped>

</style>