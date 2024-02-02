<template>
    <PageContainer>
        <div>
            <AddDriver />
        </div>
        <div>
            <VTable :heads = '["الاسم", "رقم الهاتف", "الرخصة","تاريخ الميلاد", "العنوان", "الحالة", "تاريخ الإنشاء", ""]'>
                <VTableRow v-for = "driver in driversStore.drivers">
                    <td>{{ driver.name }}</td>
                    <td>{{ driver.phone }}</td>
                    <td>{{ driver.license_number }}</td>
                    <td>{{ driver.birth_date }}</td>
                    <td>{{ driver.address }}</td>
                    <td>{{ driver.status }}</td>
                    <td>{{ driver.created_at }}</td>
                    <td></td>
                </VTableRow>
            </VTable>
        </div>
    </PageContainer>
</template>

<script setup>
import { onMounted } from "vue"
import { VTable, VTableRow } from '@/components';
import { useDriversStore } from '@/stores';
import AddDriver from "./AddDriver.vue"
import PageContainer from '@/components/PageContainer.vue';
import { useFetchApiStates } from "./useApiStates"
const driversStore = useDriversStore()

// Data - APi - UI => States
const { fetchDrivers, onFetchSuccess, onFetchFailure, drivers } = useFetchApiStates()

// Functions 
onMounted( () => {
    fetchDrivers()
})

onFetchSuccess( () => {
    driversStore.setDrivers(drivers)
})

onFetchFailure( () => {})

</script>

<style lang="scss" scoped>

</style>