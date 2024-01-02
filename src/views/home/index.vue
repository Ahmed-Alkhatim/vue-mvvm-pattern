<template>
    <div>
        <!-- <Navbar /> -->
       
            <Dialog v-model="isDialogVisible">
                <template #activator>
                    <Btn>Hello</Btn>
                </template>
                <Card>
                    ll
                </Card>
            </Dialog>
            <!-- <VTable /> -->
    </div>
</template>

<script setup>
import { ref } from "vue"
import { PageContainer,  VTable, Dialog, Btn, Card } from "@/components"
const isDialogVisible = ref(false)
</script>

<style lang="scss" scoped>

</style>