import { useFetcher, usePost, useGet, useDelete } from "@/composables"

class DriversApiClass extends EventTarget{

    constructor(){
        super();
    }

    on(event, callback){ this.addEventListener(event, callback)}
    fetchDrivers = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData("/drivers")

        if(response.value && response.value.status == 200){
            this.dispatchEvent(
                new CustomEvent(
                    'fetchSuccess',
                    { detail: error.value }
                )
            )
        }
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'fetchFailure',
                    { detail: error.value }
                )
            )
        }
    }

    addDriver = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData("/drivers", data)

        if(response.value && response.value.status == 200){
            this.dispatchEvent(
                new CustomEvent(
                    'addSuccess',
                    { detail: error.value }
                )
            )
        }
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'addFailure',
                    { detail: error.value }
                )
            )
        }
    }

    deleteDriver = async(id) => {
        const { response, error, getData } = useFetcher(useDelete)
        await getData(`/drivers/${id}`)

        if(response.value && response.value.status == 200){
            this.dispatchEvent(
                new CustomEvent(
                    'deleteSuccess',
                    { detail: error.value }
                )
            )
        }
         
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'deleteFailure',
                    { detail: error.value }
                )
            )
        }
    }

}


const DriversApi = new DriversApiClass();
export default DriversApi;