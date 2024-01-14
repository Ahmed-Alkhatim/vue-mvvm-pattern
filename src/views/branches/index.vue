<template>
<div>
    <div>
        <AddBranch />
    </div>
    <div>
    <VTable :heads = "['الإسم ', 'الإسم العام', 'السجل التجاري', 'البنك', 'الآيبان ', 'رقم الحساب', 'الرقم الضريبي', 'قيمة الضريبة', 'النوع', 'العنوان ', 'الحالة'] ">
        <VTableRow v-for="branch in branchesStore.branches">
            <td>{{ branch.name }}</td>
            <td>{{ branch.public_name }}</td>
            <td>{{ branch.brand_image }}</td>
            <td>{{ branch.commercial_record }}</td>
            <td>{{ branch.bank }}</td>
            <td>{{ branch.iban }}</td>
            <td>{{ branch.account_number }}</td>
            <td>{{ branch.tax_number }}</td>
            <td>{{ branch.tax_number }}</td>
            <td>{{ branch.tax_value }}</td>
            <td>{{ branch.type }}</td>
            <td>{{ branch.address }}</td>
        </VTableRow>
    </VTable>
    </div>
</div>
</template>

<script setup>
import { VTable, VTableRow } from "@/components"
import AddBranch from "./AddBranch.vue";
import { useBranchesStore } from "@/stores";
import useApiStates from "./useApiStates"
import { onMounted } from "vue";

const branchesStore = useBranchesStore()
const { getBranches } = useApiStates()

onMounted( () => {
    getBranches()
})


</script>

<style lang="scss" scoped>

</style>