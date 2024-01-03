<template>
    <div>
        <div>
            <AddDriver />
        </div>
        <div>
            <VTable :heads = '["الاسم", "رقم الهاتف", "الرخصة","تاريخ الميلاد", "العنوان", "الحالة", "تاريخ الإنشاء"]'>
                <VTableRow v-for = "driver in driversStore.drivers">
                    <td>{{ driver.name }}</td>
                    <td>{{ driver.phone }}</td>
                    <td>{{ driver.license_number }}</td>
                    <td>{{ driver.birth_date }}</td>
                    <td>{{ driver.address }}</td>
                    <td>{{ driver.status }}</td>
                    <td>{{ driver.created_at }}</td>
                </VTableRow>
            </VTable>
        </div>
    </div>
</template>

<script setup>
import { VTable, VTableRow } from '@/components';
import { useDriversStore } from '@/stores';
import AddDriver from "./AddDriver.vue"

const driversStore = useDriversStore()
</script>

<style lang="scss" scoped>

</style>