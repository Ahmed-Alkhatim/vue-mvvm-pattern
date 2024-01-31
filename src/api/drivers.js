import { useFetcher, usePost, useGet, useDelete } from "@/composables"

class DriversApiClass extends EventTarget{

    constructor(){
        super();
    }

    fetchDrivers = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData("/drivers")

        if(response.value && response.value.status == 200){
            this.dispatchEvent(
                new CustomEvent(
                    'fetchSuccess',
                    { detail: response.value.data }
                )
            )
        }
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'fetchFailure',
                    { detail: response.value.data }
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
                    { detail: response.value.data }
                )
            )
        }
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'addFailure',
                    { detail: response.value.data }
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
                    { detail: response.value.data }
                )
            )
        }
         
        else if(error.value) {
            this.dispatchEvent(
                new CustomEvent(
                    'deleteFailure',
                    { detail: response.value.data }
                )
            )
        }
    }

}


const DriversApi = new DriversApiClass();