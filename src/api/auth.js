import { useFetcher, usePost, useGet } from "@/composables"

class AuthClass extends EventTarget {
    constructor(){
        super();
    }
    on(event, callback){
        this.addEventListener(event, callback)
    }
    login = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData("/login", data)
        if(response.value && response.value?.status == 200){
            const { token, user } = response.value.data
            this.dispatchEvent(new CustomEvent('loginSuccess', { detail: { token, user } }))
        } else if(error.value && error.value.response?.status == 422) {
            this.dispatchEvent(new CustomEvent('loginFailure', { detail: error.value.response.data.errors }))
        }
    }

    register = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData("/register", data)
        if(response.value && response.value?.status?.code == 200){
            this.dispatchEvent(new CustomEvent('registerSuccess', { detail: response.value.data }))
        } else if(error.value && error.value.response?.status == 422) {
            this.dispatchEvent(new CustomEvent('registerFail', { detail: error.value.response.data.errors }))
        }
    }
}

const Auth = new AuthClass()
export default Auth