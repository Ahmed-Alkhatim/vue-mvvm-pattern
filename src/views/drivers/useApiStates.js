import { reactive } from "vue"
import { DriversApi } from "@/api"
export const useFetchApiStates = () => {
    
    // States
    const drivers = reactive({})
    const responsesEvents = reactive({
        fetchSucceeded: () => {},
        fetchFailed: () => {},
    })

    // Events

    const onFetchSuccess = (callback) => { responsesEvents.fetchFailed = callback }
    const onFetchFailure = (callback) => { responsesEvents.fetchFailed = callback }

    DriversApi.on('fetchSuccess', (e) => {
        Object.assign(drivers, e.detail.data)
        responsesEvents.fetchSucceeded()
    })

    DriversApi.on('fetchFailure', (e) => {
        responsesEvents.fetchFailed()
    })


    // Methods

    const fetchDrivers = () => {
        DriversApi.fetchDrivers()
    }

    return { fetchDrivers, onFetchSuccess, onFetchFailure, drivers }
}

