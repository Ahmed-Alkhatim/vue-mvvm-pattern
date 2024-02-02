<template>
    <PageContainer>
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
    </PageContainer>
</template>

<script setup>
import { VTable, VTableRow} from "@/components"
import { useUsersStore } from "@/stores"
import AddUser from "./AddUser.vue"
import { useFetchApiStates } from "./useApiStates"
import { onMounted } from "vue"
import PageContainer from '@/components/PageContainer.vue';

// Stores
const userStore = useUsersStore()

// UI | Data | API  => composable
const { fetchUsers, onFetchFailure, onFetchSuccess } = useFetchApiStates()

// Functions
onMounted( () => {
    fetchUsers()
})

onFetchSuccess( () => {})
onFetchFailure( () => {})

</script>

<style lang="scss" scoped>

</style>