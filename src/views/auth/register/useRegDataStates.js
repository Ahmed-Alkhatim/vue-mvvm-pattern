import { reactive } from "vue"

const useRegDataStates = () => {

//  States
    const registerationData  = reactive({ type : "", name : "", phone : "", company_name : "", public_name : "", commercial_record : "", tax_number : "", type : "", birth_date : "", id_number : "", identity_type : "", email : "", password : "", password_confirmation : ""})
    const errors = reactive({ type : "", name : "", phone : "", company_name : "", public_name : "", commercial_record : "", tax_number : "", type : "", birth_date : "", id_number : "", identity_type : "", email : "", password : "", password_confirmation : ""})
   
//  Actions
    const setType = (type) => {
        registerationData.type = type
    }
    
// 
    return { registerationData, errors , setType }
}

export default useRegDataStates