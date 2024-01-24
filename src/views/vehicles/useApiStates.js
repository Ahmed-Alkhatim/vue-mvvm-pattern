import { useVehiclesStore } from "@/stores"
import { VehiclesApi } from "../../api";
import { reactive, ref } from "vue";

const useApiStates = () => { 
    // Stores
    const vehiclesStore = useVehiclesStore()
    const addContentErrors = reactive({})

// Events
    const responsesEvents = reactive({
        fetchSucceeded : () => {},
        fetchFailed : () => {},
        addSucceeded : () => {},
        addFailed : () => {},
    })

    const onFetchSuccess = (callback) => { responsesEvents.fetchSucceeded = callback }
    const onFetchFailure = (callback) => { responsesEvents.fetchFailed = callback }
    const onAddSuccess = (callback) => { responsesEvents.addSucceeded = callback }
    const onAddFailure = (callback) => { responsesEvents.addFailed = callback }

    /* Fetch Vehicles */
    VehiclesApi.on('fetchSuccess', (e) => {
        vehiclesStore.setVehicles(e.detail)
        responsesEvents.fetchSucceeded()
    })
    VehiclesApi.on('fetchFailure', (e) => {
        responsesEvents.fetchFailed()
    });

    /* Add Vehicles */
    VehiclesApi.on('addSuccess', (e) => {
        responsesEvents.addSucceeded()
    })
    VehiclesApi.on('addFailure', (e) => {
        console.log('I have failed to add');
        Object.assign(addContentErrors, { name : "name Error"})
        responsesEvents.addFailed()
    });

// Methods
    const fetchVehicles = () => {
        VehiclesApi.fetchVehicles()
    }

    const addVehicle = (data) => {
        VehiclesApi.addVehicle(data)
    }
    return { fetchVehicles, onFetchSuccess, onFetchFailure, addVehicle, onAddSuccess, onAddFailure, addContentErrors }
};


export default useApiStates