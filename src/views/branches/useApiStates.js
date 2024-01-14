import { useBranchesStore} from "@/stores"
import { BranchApi } from "@/api";

const useApiStates = () => {
    // Stores
    const branchesStore = useBranchesStore()

    // Events
    BranchApi.on('FetchedSuccessfully', (data) => {
        branchesStore.setBranches(data)
    })
    BranchApi.on('errorOnFetch', (data) => {

    })

    // Methods
    const getBranches = () => {
        BranchApi.getBranches()
    }
    
    return { getBranches }
}

export default useApiStates