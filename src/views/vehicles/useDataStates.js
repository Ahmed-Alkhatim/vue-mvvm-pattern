import { reactive } from "vue"

const useDataStates = () => {

    const addVehiclesData = reactive({ name : "", type : "", brand : "", model : "", fuel_type : "", year : "", plate_number : ""})
    
    
    return { addVehiclesData }
}

export default useDataStates