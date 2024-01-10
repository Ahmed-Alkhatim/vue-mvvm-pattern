<template>
    <div class="w-1/3 flex justify-center m-auto">
        <div class="w-full mt-20 space-y-5">
            <TextInput v-model="registerationData.company_name" label = 'اسم الشركة' />
            <TextInput v-model="registerationData.public_name" label = 'الاسم العام للشركة'/>
            <Btn class="w-full" size = "small" color = "blue" @click = "saveData()">التالي</Btn>
        </div>
    </div>
</template>

<script setup>
import { inject} from 'vue'
import { TextInput, Btn } from "@/components"

const registerationData = inject('registerationData')
const emit = defineEmits(['complete'])


const saveData = () => {
    emit('complete', )
}

</script>

<style lang="scss" scoped>

</style>