import { useFetcher, useGet, usePost } from "@/composables"

class BranchApiClass extends EventTarget {

    on( event, callback){
        this.addEventListener(event, callback)
    }

    getBranches = async () => {
        const { response, error, getData } = useFetcher(useGet)
        await getData('./branches')
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(new CustomEvent('FetchedSuccessfully', { detail : response.value.data}))
        } else if (error.value) {
            this.dispatchEvent(new CustomEvent('errorOnFetch', { detail : error.value }))
        }
    }

}

const BranchApi = new BranchApiClass()
export default BranchApi