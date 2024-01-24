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
import PageContainer from '@/components/PageContainer.vue';

const userStore = useUsersStore()


</script>

<style lang="scss" scoped>

</style>