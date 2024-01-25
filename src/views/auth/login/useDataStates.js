import { reactive } from "vue"

const useDataStates = () => {
    const userData = reactive({ password: '12345678', email : 'tygeryl@mailinator.com'})

    return { userData }
}

export default useDataStates