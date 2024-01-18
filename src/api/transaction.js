import { useFetcher, useGet, usePost, useDelete } from '@/composables'

class TransactionsApiClass extends EventTarget {
    constructor(){
        super();
    }

    fetchTransactions = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData('/transactions')
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent( new CustomEvent('fetchSuccess', { detail: response.value.data.data}))
        } else if(error.value) {
            this.dispatchEvent( new CustomEvent('fetchFailure', { detail: error.value}))
        }
    }


}

const TransactionsApi = new TransactionsApiClass()
export default TransactionsApi