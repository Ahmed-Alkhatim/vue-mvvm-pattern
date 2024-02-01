import { reactive } from "vue";
import { UsersApi } from "../../api";

export const useFetchApiStates = () => {
    // States
    const responseEvents  = reactive({
        fetchSucceeded : () => {},
        fetchFailed : () => {},
    })

    // Events
    const onFetchSuccess = (callback) => { responseEvents.fetchSucceeded = callback }
    const onFetchFailure = (callback) => { responseEvents.fetchFailed = callback }

    UsersApi.on('fetchSuccess', () => {})
    UsersApi.on('fetchFailure', () => {})

    // Methods

    const fetchUsers = () => {
        UsersApi.fetchUsers()
    }

    return { fetchUsers, onFetchSuccess, onFetchFailure }
}

export const useAddApiStates = () => {
    // States
    const contentError = reactive({})
    const responseEvents = reactive({
        addSucceeded : () => {},
        addFailed : () => {},
    })

    // Events
    const onAddSuccess = (callback) => { responseEvents.addSucceeded = callback }
    const onAddFailure = (callback) => { responseEvents.addFailed = callback }  

    UsersApi.on('addSuccess', () => {})
    UsersApi.on('addFailure', () => {})

    // Methods

    const addUser = (user) => {
        UsersApi.addUser(user)
    }

    return { addUser, onAddSuccess, onAddFailure, contentError }
}
