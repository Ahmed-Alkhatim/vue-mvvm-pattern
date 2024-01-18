import { ref } from "vue"

const useUiStates = () => {
    const isAddDialogVisible = ref(false)
    const setAddDialogVisibility = (state) => {
        isAddDialogVisible.value = state
    }

    return { isAddDialogVisible, setAddDialogVisibility }
}

export default useUiStates
