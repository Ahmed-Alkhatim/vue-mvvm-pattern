<template>
    <Btn :color="colors[type]" size="xx-small">
        <IconEdit size="18" v-if = "type == 'edit'" />
        <IconTrash size="18" v-else-if = "type == 'delete'"/>
        <IconZoomScan size="18" v-else-if = "type == 'view'" />
    </Btn>
</template>

<script setup>
import { IconEdit, IconTrash, IconZoomScan } from "@tabler/icons-vue"
import { Btn } from "@/components"

const props = defineProps(['type'])
const colors = {
    'edit' : 'primary',
    'delete' : 'error',
    'view' : 'success',
}
</script>

<style scoped>

</style>