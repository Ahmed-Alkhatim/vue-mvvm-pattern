<template>
    <PageContainer>
    <div class = "grid grid-cols-4 gap-4">
        <StatisticsCard title=" رصيد المحفظة الرئيسية" color="green" value="10000 ريال" v-slot="{color}">
            <IconWallet :color="color" size="24"/>
        </StatisticsCard>
        <StatisticsCard title="إجمالي المحافظ الفرعية" color="primary" value="10000 ريال" v-slot="{color}">
            <IconCash :color="color" size="26"/>
        </StatisticsCard>
        <StatisticsCard title="سائقين" color="blue" value="15000" v-slot="{color}">
            <IconRadar :color="color" size="26"/>
        </StatisticsCard>
        <StatisticsCard title="مركبات" color="red" value="10060 " v-slot="{ color }">
            <IconCar :color="color" size="26"/>
        </StatisticsCard>
    </div>
</PageContainer>
</template>

<script setup>
import StatisticsCard from './StatisticsCard.vue';
import PageContainer from '@/components/PageContainer.vue';
import { IconWallet, IconCash, IconCar, IconRadar} from '@tabler/icons-vue';
</script>

<style lang="scss" scoped>

</style>