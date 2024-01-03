import { defineStore } from "pinia";
import { ref } from "vue"

export const useDriversStore = defineStore( "drivers", () => {
    // States
    const drivers = ref([
        {"id" : 1 , "name" : "محمد احمد", "phone" : "9661234567", "license_number" : 12333, "birth_date" : "03/05/1998", "address" : "جدة", "status" : "active", "created_at" : "03/4/203"},
        {"id" : 1 , "name" : "محمد احمد", "phone" : "9661234567", "license_number" : 12333, "birth_date" : "03/05/1998", "address" : "جدة", "status" : "active", "created_at" : "03/4/203"},
        {"id" : 1 , "name" : "محمد احمد", "phone" : "9661234567", "license_number" : 12333, "birth_date" : "03/05/1998", "address" : "جدة", "status" : "active", "created_at" : "03/4/203"}
    ])

    // Computed

    // getters as functions [pass param]

    // Actions
    const setDrivers = (data) => {
        drivers.value = data
    }
    return { drivers, setDrivers}
})