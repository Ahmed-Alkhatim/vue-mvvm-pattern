import { reactive } from "vue"

const useAddUiStates = () => {
    const addInputsErrors = reactive({ name : "", public_name : "", public_name : "", brand_image : "", commercial_record : "", commercial_record : "", bank : "", iban : "", account_number : "", tax_number : "", type : "", address : "", status : "",})

    return { addInputsErrors }
}


export { useAddUiStates}