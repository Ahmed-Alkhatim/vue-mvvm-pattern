import { defineStore } from "pinia";
import { ref } from "vue";


export const useVehiclesStore = defineStore( "Vehicles", () => {
    const vehicles = ref([])
    
    // Actions
    const setVehicles = (data) => {
        vehicles.value = data
    }

    return({ vehicles, setVehicles })
})
// 

/*
 { "id" : "", "manageable_type" : "", "manageable_id" : "", "type" : "نوع ", "brand" : "مرسيدس", "model" : "موديل", "fuel_type" : "بنزين", "year" : "2022", "plate_number" : "28855", "created_at" : "28855", "updated_at" : "2022" },
        { "id" : "", "manageable_type" : "", "manageable_id" : "", "type" : "نوع ", "brand" : "مرسيدس", "model" : "موديل", "fuel_type" : "بنزين", "year" : "2022", "plate_number" : "28855", "created_at" : "28855", "updated_at" : "2022" },
        { "id" : "", "manageable_type" : "", "manageable_id" : "", "type" : "نوع ", "brand" : "مرسيدس", "model" : "موديل", "fuel_type" : "بنزين", "year" : "2022", "plate_number" : "28855", "created_at" : "28855", "updated_at" : "2022" }

*/