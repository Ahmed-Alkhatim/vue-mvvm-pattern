<template>
    <PageContainer>
        <VTable :heads='["الكمية", "النوع", "العملية", "التعليق", "الحالة"]'>
            <VTableRow v-for="transaction in transactionsStore.transactions">
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.operation }}</td>
                <td>{{ transaction.comment }}</td>
                <td>{{ transaction.status }}</td>
            </VTableRow>
        </VTable>
    </PageContainer>
</template>

<script setup>
import { VTable, VTableRow } from "@/components"
import { useTransactionsStore } from "@/stores"
import PageContainer from '@/components/PageContainer.vue';
import useApiStates from "./useApiStates";
import { onMounted } from "vue";

// Stores
const transactionsStore = useTransactionsStore()

// UI | Data | API states
const { fetchTransactions, onFetchFailure, onFetchSuccess } = useApiStates()

// Methods
onMounted(() => {
    fetchTransactions()
})

onFetchSuccess(() => { })
onFetchFailure(() => { })

</script>

<style lang="scss" scoped></style>