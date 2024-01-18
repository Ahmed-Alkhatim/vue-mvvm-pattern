import { useVehiclesStore } from "@/stores"
import { VehiclesApi } from "../../api";
import { reactive } from "vue";

const useApiStates = () => { 
    // Stores
    const vehiclesStore = useVehiclesStore()

    // Events
    const responsesEvents = reactive({
        fetchSucceeded : () => {},
        fetchFailed : () => {},
    })

    const onFetchSuccess = (callback) => { responsesEvents.fetchSucceeded = callback }
    const onFetchFailure = (callback) => { responsesEvents.fetchFailed = callback }

    VehiclesApi.on('fetchSuccess', (e) => {
        vehiclesStore.setVehicles(e.detail)
        responsesEvents.fetchSucceeded()
    })
    VehiclesApi.on('fetchFailure', (e) => {
        responsesEvents.fetchFailed()
    });

    // Methods
    const fetchVehicles = () => {
        VehiclesApi.fetchVehicles()
    }

    
    return { fetchVehicles, onFetchSuccess, onFetchFailure }
};


export default useApiStates