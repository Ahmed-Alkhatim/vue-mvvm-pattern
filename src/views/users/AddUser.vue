<template>
    <div>
        <VTableRow :heads = '["", "", "", ""]'>
            <VTableRow v-for="a in []">
                <TextInput v-model="userData" label="" :error="error"/>
            </VTableRow>
        </VTableRow>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { TextInput, VTableRow, VTableRow } from '@/components';

const userData = reactive({

})

const errors = reactive({

})


</script>

<style lang="scss" scoped>

</style>