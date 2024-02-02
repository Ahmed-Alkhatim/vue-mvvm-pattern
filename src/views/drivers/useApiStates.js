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

    const onFetchSuccess = (callback) => { responsesEvents.fetchSucceeded = callback }
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

export const  useAddApiStates = () => {
    // states
    const contentError = reactive({})
    const responsesEvents = reactive({
        addSucceeded : () => {},
        addFailed : () => {},
    })

    // Events
    const onAddSuccess = (callback) => { responsesEvents.addSucceeded = callback }
    const onAddFailure = (callback) => { responsesEvents.addFailed = callback }

    DriversApi.on('addSuccess', (e) => {})
    DriversApi.on('addFailure', (e) => {
        Object.assign(contentError, e.detail.errors)
        responsesEvents.addFailed()
    })

    // Methods
    const addDriver = (data) => {
        DriversApi.addDriver(data)
    }

    return { addDriver, onAddSuccess, onAddFailure, contentError }
}
