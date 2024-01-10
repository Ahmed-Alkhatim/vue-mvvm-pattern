import { auth } from "@/api";
import { ref } from "vue";

const useRegApiStates = () => {
    const inputsError = ref({})

    auth.on('registerFail', (e) => {
        console.log("Registered Successfully", e.detail);
    })
    auth.on('registerSuccess', () => {
        console.log("Registered failed", e.detail);
    })

    const registerUser = (data) => {
        auth.register(data)
    }

    return { registerUser , inputsError }
}
 
export default useRegApiStates