<template>
    <Dialog v-model="isDialogVisible">
        
        <template #activator>
            <Btn size="small" color="primary">إضافة فرع</Btn>
        </template>

        <Card title="إضافة فرع">

            <div class = "flex justify-end">
                <div class = "mt-4">
                    <Btn size = "small" color = "primary">إضافة</Btn>
                    <Btn @click = "isDialogVisible = false" size = "small" color = "secondary">إلغاء</Btn>
                </div>
            </div>
        </Card>
    </Dialog>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Dialog, Btn, Card, TextInput, DateInput, NumberInput } from "@/components"

// States
const isDialogVisible = ref(false)

const branchData = reactive({

})

const errors = reactive({ 

 })
</script>

<style lang="scss" scoped>

</style>