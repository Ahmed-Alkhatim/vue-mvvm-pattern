import { reactive } from "vue";
import { BranchApi } from "@/api";

const useFetchApiStates = () => {
    // Data
    const branchesData = reactive({})
    // States 
    const responseEvents = reactive({
        fetchSucceeded : () => {},
        fetchFailed : () => {},
    })

    // Events
    const onFetchSuccess = (callback) => { responseEvents.fetchSucceeded = callback }
    const onFetchFailure = (callback) => { responseEvents.fetchFailed = callback }
    
    BranchApi.on('fetchSuccess', (e) => {
        console.log('detail', e.detail.data);
        Object.assign(branchesData, e.detail.data)
        responseEvents.fetchSucceeded()
    })
    BranchApi.on('fetchFailure', (e) => {
        responseEvents.fetchFailed()
    })

    // Methods
    const fetchBranches = () => {
        BranchApi.fetchBranches()
    }

    return { fetchBranches, onFetchFailure, onFetchSuccess, branchesData }
}


const useAddApiStates = () => {

    // States
    const responseEvents = reactive({
        addSucceeded : () => {},
        addFailed : () => {},
    })

    // Events
    const onAddSuccess = (callback) => { responseEvents.addSucceeded = callback }
    const onAddFailure = (callback) => { responseEvents.addFailed = callback }

    BranchApi.on('addSuccess', () => {
        responseEvents.addSucceeded()
    })
    BranchApi.on('addFailure', () => {
        responseEvents.addFailed()
    })

    // Methods
    const addBranch = async(data) => {
        await BranchApi.addBranch(data)
    }

    return { addBranch, onAddSuccess, onAddFailure  }
}

export { useFetchApiStates, useAddApiStates }