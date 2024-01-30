<template>
<PageContainer>
    <div>
        <AddBranch />
    </div>
    <div>
    <VTable :heads = "['الإسم ', 'الإسم العام','العنوان ', 'الرصيد', '' ] ">
        <VTableRow v-for="branch in branchesStore.branches">
            <td>{{ branch.name }}</td>
            <td>{{ branch.public_name }}</td>
            <td>{{ branch.address }}</td>
            <td>{{ branch.bank }}</td>
            <td class="flex justify-end">
                <ActionBtn type="view"/>
                <ActionBtn type="edit"/>
                <ActionBtn type="delete"/>
            </td>
        </VTableRow>
    </VTable>
    </div>
</PageContainer>
</template>

<script setup>
import { VTable, VTableRow, ActionBtn } from "@/components"
import AddBranch from "./AddBranch.vue";
import { useBranchesStore } from "@/stores";
import { useFetchApiStates } from "./useApiStates"
import { onMounted } from "vue";
import PageContainer from '@/components/PageContainer.vue';

const branchesStore = useBranchesStore()
const { fetchBranches, onFetchSuccess, onFetchFailure } = useFetchApiStates()

onMounted( () => {
    fetchBranches()
})

onFetchSuccess( () => {} )
onFetchFailure( () => {} )

</script>

<style lang="scss" scoped>

</style>