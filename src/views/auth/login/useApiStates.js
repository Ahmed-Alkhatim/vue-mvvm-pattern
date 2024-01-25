import { Auth } from "@/api"
import { reactive } from "vue"

const useApiStates = () => {
    const authData = reactive({})
    const wrongCredentials  = reactive({})
    // States
    const responseStates = reactive({
        loginSucceeded: () => {},
        loginFailed: () => {},
    })
    
    // Events
    const onLoginSuccess = (callback) => { responseStates.loginSucceeded = callback }
    const onLoginFailure  = (callback) => { responseStates.loginFailed = callback }

    Auth.on('loginSuccess', (e) => { 
        Object.assign(authData, e.detail)
        responseStates.loginSucceeded() 
    })
    Auth.on('loginFailure', (e) => { 
        console.log('wrongCredentials on Event', e.detail);
        Object.assign(wrongCredentials, e.detail)
        responseStates.loginFailed()
    })

    // Methods

    const logIn = (data) => {
        Auth.login(data)
    }

    return { logIn, onLoginSuccess, onLoginFailure, authData, wrongCredentials }
}

export default useApiStates