import { reactive } from "vue"
const useUiStates = () => {
    const errors = reactive({ name: null, email : null })

    const setErrors = (errorsList) => { 
        Object.assign(errors, errorsList)

    }
    return { errors, setErrors }
}

export default useUiStates