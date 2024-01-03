import { defineStore } from "pinia";
import { ref } from "vue";
export const useProductsStore = defineStore("products", () => {

    // states
    const products = ref([
        { "id" : "2", "profile_id" : "2", "product_type_id" : "2", "name" : "منتج", "price" : "3000", "description" : "وصف للمنتج", "status" : "active", "created_at" : "22/2/2022", "updated_at" : "22/2/2030" },
        { "id" : "2", "profile_id" : "2", "product_type_id" : "2", "name" : "منتج", "price" : "3000", "description" : "وصف للمنتج", "status" : "active", "created_at" : "22/2/2022", "updated_at" : "22/2/2030" }
        
    ])

    const setProducts = (data) => {
        products.value = data
    }

    return { products, setProducts }
})