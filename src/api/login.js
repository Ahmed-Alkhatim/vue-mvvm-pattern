import { useFetcher, usePost, useGet } from "@/composables"

class LogInApi extends EventTarget {
    constructor(){
        super();
    }
    on(event, callback){
        this.addEventListener(event, callback)
    }
    login = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData("/login", data)
        if(response.value && response.value?.status?.code == 200){
            this.dispatchEvent(new CustomEvent('loggedSuccess', { detail: response.value.data }))
        } else if(error.value && error.value.response?.status == 422) {
            this.dispatchEvent(new CustomEvent('loggingFail', { detail: error.value.response.data.errors }))
        }
    }

    register = async() => {

    }
}

const logInApi = new LogInApi()
export default logInApi