import { Auth } from "@/api";
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores"

const useRegApiStates = () => {
    // 
    const userStore = useUserStore()
    
    // Events
    const responseEvents = reactive({})
    const onRegisterSuccess = (callback) => { responseEvents.registerSucceed = callback }
    const onRegisterFail = (callback) => { responseEvents.registerFailed = callback }


    Auth.on('registerSuccess', (e) => {
        userStore.setUser( e.detail )
        responseEvents.registerSucceed()
    })
    Auth.on('registerFail', (e) => {
        responseEvents.registerFailed(e.detail)
    })

    
    // Methods
    const registerUser = (data) => {
        Auth.register(data)
    }

    return { registerUser , onRegisterSuccess, onRegisterFail }
}
 
export default useRegApiStates