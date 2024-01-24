import { ref, reactive } from "vue"

const useUiStates = () => {
    const isAddDialogVisible = ref(false)
    const setAddDialogVisibility = (state) => {
        isAddDialogVisible.value = state
    }

    const inputsErrors = reactive({ name : "", brand : "", model : "", fuel_type : "", year : "", plate_number : ""})
    const setInputsErrors = (errors) => {
        Object.assign(inputsErrors, errors)
    }
    return { isAddDialogVisible, setAddDialogVisibility, inputsErrors, setInputsErrors }
}

export default useUiStates
