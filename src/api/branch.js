import { useFetcher, useGet, usePost } from "@/composables"

class BranchApiClass extends EventTarget {

    on( event, callback){
        this.addEventListener(event, callback)
    }

    fetchBranches = async () => {
        const { response, error, getData } = useFetcher(useGet)
        await getData('./branches')
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(
                new CustomEvent(
                    'fetchSuccess', { detail : response.value.data}
                )
            )
        } else if (error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'fetchFailure', { detail : error.value }
                )
            )
        }
    }

    addBranch = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData()
        if(response.value && response.value.status === 200) {
            this.dispatchEvent(
                new CustomEvent(
                    'addSuccess', { detail : response.value.data }
                )
            )
        }

        else if( error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'addFailure', { detail : error.value }
                )
            )
        }
    }

}

const BranchApi = new BranchApiClass()
export default BranchApi