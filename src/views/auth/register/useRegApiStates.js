import { Auth } from "@/api";
import { ref } from "vue";
import { useUserStore } from "@/stores"

const useRegApiStates = () => {
    // Stores
    const userStore = useUserStore()
    // States
    const inputsError = ref({})

    // Events
    const onRegisterSuccess = ( (callback) => { callback() })

    Auth.on('registerSuccess', (e) => {
        userStore.setUser({ name : 'admin'})
        onRegisterSuccess()
    })


    Auth.on('registerFail', (e) => {
        // 
    })

    // Methods
    const registerUser = (data) => {
        Auth.register(data)
    }

    return { registerUser , onRegisterSuccess, inputsError }
}
 
export default useRegApiStates