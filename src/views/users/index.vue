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
import useApiStates from "./useApiStates"
// import useDataStates from "./useDataStates"
// import useUiStates from "./useUiStates"
import { onMounted } from "vue"

// Stores
const userStore = useUsersStore()

// UI | Data | API States
const { fetchUsers, onFetchUsersSuccess, onFetchUsersFailure } = useApiStates()

// Functions
onMounted( () => {
    fetchUsers()
})

onFetchUsersSuccess( () => {})
onFetchUsersFailure( () => {})

</script>

<style lang="scss" scoped>

</style>