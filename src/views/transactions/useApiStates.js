import { ref, reactive } from "vue"
import TransactionsApi from "../../api/transaction"
import { useTransactionsStore } from "@/stores"

const useApiStates = () => {
    // Stores
    const transactionsStore = useTransactionsStore()
    // States



    // Events
    const responsesEvents = reactive({
        fetchSucceed: () => { },
        fetchFailed: () => { },
    })
    const onFetchSuccess = (callBack) => { responsesEvents.fetchSucceed = callBack }
    const onFetchFailure = (callBack) => { responsesEvents.fetchFailed = callBack }

    TransactionsApi.on('fetchSuccess', (e) => {
        transactionsStore.setTransactions(e.detail)
        responsesEvents.fetchFailed()
    })
    TransactionsApi.on('fetchFailure', () => {
        responsesEvents.fetchFailed()
    })


    // Methods
    const fetchTransactions = () => {
        TransactionsApi.fetchTransactions()
    }

    return { fetchTransactions, onFetchSuccess, onFetchFailure }
}

export default useApiStates