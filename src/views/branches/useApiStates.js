import { reactive } from "vue";
import { useBranchesStore} from "@/stores"
import { BranchApi } from "@/api";
import useDataStates from "./useDataStates";

const useApiStates = () => {
    // Stores
    const branchesStore = useBranchesStore()

    // Data
    const { addBranchData } = useDataStates()
    
    // States
    const addInputsErrors = reactive({  name : "", public_name : "", public_name : "", brand_image : "", commercial_record : "", commercial_record : "", bank : "", iban : "", account_number : "", tax_number : "", type : "", address : "", status : ""})
    
    // Events
    BranchApi.on('FetchedSuccessfully', (data) => {
        branchesStore.setBranches(data)
    })
    BranchApi.on('errorOnFetch', (data) => {
        
    })
    BranchApi.on('AddSuccess', (data) => {
        afterAddingBranch()
    })

    // Methods
    const getBranches = () => {
        BranchApi.getBranches()
    }

    const addBranch = () => {
        BranchApi.addBranch(addBranchData)
    }
    const afterAddingBranch = (callback) => { callback() }
    
    // Callbacks
   

    return { getBranches, addBranch, addInputsErrors, afterAddingBranch }
}

export default useApiStates