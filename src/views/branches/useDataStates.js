import { reactive } from "vue"

const useDataStates = () => {
    
    const addBranchData = reactive({ name : "", public_name : "", public_name : "", brand_image : "", commercial_record : "", commercial_record : "", bank : "", iban : "", account_number : "", tax_number : "", type : "", address : "", status : "",})

    return { addBranchData }
}

export default useDataStates