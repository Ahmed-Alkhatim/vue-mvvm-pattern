import { auth } from "@/api";
import { ref } from "vue";
import { useUserStore } from "@/stores"

const useRegApiStates = () => {
    // Stores
    const userStore = useUserStore()

    // States
    const inputsError = ref({})

    // Events
    auth.on('registerFail', (e) => {
        console.log("Registered Successfully", e.detail);
    })
    auth.on('registerSuccess', (e) => {
        userStore.setUser({ name : 'admin'})
        console.log("Registered failed", e.detail);
    })

    // Methods
    const registerUser = (data) => {
        auth.register(data)
    }

    return { registerUser , inputsError }
}
 
export default useRegApiStates