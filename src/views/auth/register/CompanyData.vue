<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-5">
            <TextInput v-model="companyData.company_name" label = 'اسم الشركة' />
            <TextInput v-model="companyData.general_company_name" label = 'الاسم العام للشركة'/>
            <Btn class="w-full" size = "small" color = "blue" @click = "saveData()">التالي</Btn>
        </div>
    </div>
</template>

<script setup>
import { reactive} from 'vue'
import { TextInput, Btn } from "@/components"

const emit = defineEmits(['complete'])
const companyData = reactive({
    company_name : '',
    general_company_name : '',
})


const saveData = () => {
    emit('complete', )
}

</script>

<style lang="scss" scoped>

</style>