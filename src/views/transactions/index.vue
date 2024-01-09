<template>
    <div>
        <VTable :heads='["الكمية", "النوع", "العملية", "التعليق", "الحالة"]'>
            <VTableRow v-for="transaction in transactionsStore.transactions">
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.operation }}</td>
                <td>{{ transaction.comment }}</td>
                <td>{{ transaction.status }}</td>
            </VTableRow>
        </VTable>
    </div>
</template>

<script setup>
   import { VTable, VTableRow} from "@/components"
   import { useTransactionsStore } from "@/stores"

//    Stores
    const transactionsStore = useTransactionsStore()
</script>

<style lang="scss" scoped>

</style>