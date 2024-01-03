<template>
    <div>
        <div>
            <AddProduct />
        </div>
        <div>
        <VTable :heads = '["الإسم ", "البروفايل", "السعر", "الوصف", "الحالة", "تاريخ الإنشاء"]'>
            <VTableRow v-for="product in productsStore.products">
                <td>{{ product.name }}</td>
                <td>{{ product.profile_id }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.status }}</td>
                <td>{{ product.created_at }}</td>
            </VTableRow>
        </VTable>
        </div>
    </div>
    </template>
    
    <script setup>
    import { VTable, VTableRow } from "@/components"
    import AddProduct from "./AddProduct.vue";
    import { useProductsStore } from "@/stores"

    // Stores
    const productsStore = useProductsStore()

    </script>
    
    <style lang="scss" scoped>
    
    </style>