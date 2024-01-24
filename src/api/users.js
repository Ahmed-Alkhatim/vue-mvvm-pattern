import { useFetcher, useGet, usePost, usePut, useDelete } from "@/composables"

class UsersApiClass extends EventTarget {
    constructor() {
        super();
    }

    on(event, callback){ this.addEventListener(event, callback)}

    fetchUsers = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData("/users")
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(new CustomEvent('fetchSuccess', { detail: response.value.data.data}))
        } else if(error.value) {
            this.dispatchEvent(new CustomEvent('fetchFailure', { error: error.value}))
        }
    }

    addUser = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData("/users")
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(new CustomEvent('addSuccess', {detail : response.value.data.data }))
        } else if(error.value) {
            this.dispatchEvent(new CustomEvent('addFailure', {detail : error.value}))
        }
    }
    deleteUser = () => {}
    updateUser = () => {}

}


const UsersApi = new UsersApiClass()

export default UsersApi