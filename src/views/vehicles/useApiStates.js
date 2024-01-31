import { useVehiclesStore } from "@/stores"
import { VehiclesApi } from "../../api";
import { reactive, ref } from "vue";

// ----------------------------------------------------------------
const useFetchApiStates = () => { 

/* States */
    const vehicles = reactive({}) 
    const responsesEvents = reactive({
        fetchSucceeded : () => {},
        fetchFailed : () => {},
    })

    const onFetchSuccess = (callback) => { responsesEvents.fetchSucceeded = callback }
    const onFetchFailure = (callback) => { responsesEvents.fetchFailed = callback }
   

/* Events */
    VehiclesApi.on('fetchSuccess', (e) => {
        Object.assign(vehicles, e.detail?.data)
        responsesEvents.fetchSucceeded()
    })
    VehiclesApi.on('fetchFailure', (e) => {
        responsesEvents.fetchFailed()
    });
  

/* Methods */
    const fetchVehicles = () => {
        VehiclesApi.fetchVehicles()
    }

    return { fetchVehicles, onFetchSuccess, onFetchFailure, vehicles }
};


// ----------------------------------------------------------------
const useAddVehiclesStates = () => {

/* States */
    const addContentErrors = reactive({})
    const responsesEvents = {
        addSucceeded : () => {},
        addFailed : () => {},
    }

/* Events */
    const onAddSuccess = (callback) => { responsesEvents.addSucceeded = callback }
    const onAddFailure = (callback) => { responsesEvents.addFailed = callback }

    VehiclesApi.on('addSuccess', (e) => {
        responsesEvents.addSucceeded()
    })
    VehiclesApi.on('addFailure', (e) => {
        Object.assign(addContentErrors, e.detail.errors)
        responsesEvents.addFailed()
    });

/* Methods */
    const addVehicle = (data) => {
        VehiclesApi.addVehicle(data)
    }

    return { addVehicle, onAddSuccess, onAddFailure, addContentErrors }
}
export { useFetchApiStates, useAddVehiclesStates }