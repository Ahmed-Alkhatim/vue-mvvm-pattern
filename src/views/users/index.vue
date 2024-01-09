<template>
    <div>
        <div>
            <AddUser />
        </div>
    
    <div>   
        <VTable :heads = '["الإسم " , "الايميل", "النوع"]'>
            <VTableRow v-for="user in userStore.users">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.type }}</td>
            </VTableRow>
        </VTable>
    </div>
    </div>
</template>

<script setup>
import { VTable, VTableRow} from "@/components"
import { useUsersStore } from "@/stores"
import AddUser from "./AddUser.vue"
const userStore = useUsersStore()


</script>

<style lang="scss" scoped>

</style>