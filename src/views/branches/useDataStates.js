import { reactive, ref } from "vue"

const useDataStates = () => {
    
    const addBranchData = reactive({ name : "", public_name : "", public_name : "", brand_image : "", commercial_record : "", commercial_record : "", bank : "", iban : "", account_number : "", tax_number : "", type : "", address : "", status : "",})
   
    const editBranchData = ref({ name : "aaaa", public_name : "", public_name : "", brand_image : "", commercial_record : "", commercial_record : "", bank : "", iban : "", account_number : "", tax_number : "", type : "", address : "", status : ""})
    const setEditBranchData = (data) => {
        console.log(data);
       editBranchData.value = data
    }
    
    return { addBranchData, editBranchData, setEditBranchData }
}

export default useDataStates