<template>
    <div class = "grid grid-cols-4 gap-4">
        <StatisticsCard title=" رصيد المحفظة الرئيسية" color="red" value="10000 ريال"/>
        <StatisticsCard title="إجمالي المحافظ الفرعية" color="green" value="10000 ريال"/>
        <StatisticsCard title="سائقين" color="primary" value="15000"/>
        <StatisticsCard title="مركبات" color="error" value="10060 "/>
    </div>
</template>

<script setup>
import StatisticsCard from './StatisticsCard.vue';
</script>

<style lang="scss" scoped>

</style>