import { reactive } from "vue"

const useDataStates = () => {
    const addUserData = reactive({  name : "", email : "", userable_type : ""})


    return { addUserData } 
}

export default useDataStates 