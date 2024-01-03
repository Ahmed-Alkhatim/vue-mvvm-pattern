<template>
<div>
    <div>
        <AddBranch />
    </div>
    <div>
    <VTable :heads = "[]">
        <VTableRow v-for="branch in []">
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
            <td>{{ branch.name }}</td>
        </VTableRow>
    </VTable>
    </div>
</div>
</template>

<script setup>
import { VTable, VTableRow } from "@/components"
import AddBranch from "./AddBranch.vue";
</script>

<style lang="scss" scoped>

</style>