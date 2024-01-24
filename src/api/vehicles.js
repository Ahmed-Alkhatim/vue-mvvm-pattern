import { useFetcher, useGet, usePost, useDelete } from "@/composables"

class VehiclesApiClass extends EventTarget {
    constructor(){
        super();
    }

    on(event, callback){ this.addEventListener(event, callback) }

    fetchVehicles = async() => {
        const { response, error, getData } = useFetcher(useGet)
        await getData('/vehicles')
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(new CustomEvent('fetchSuccess', {detail: response.value.data.data}))
        } else if(error.value) {
            this.dispatchEvent(new CustomEvent('fetchFailure', { detail: error.value}))
        }
    }

    addVehicle = async(data) => {
        const { response, error, getData } = useFetcher(usePost)
        await getData('/vehicles', data)
        if(response.value && response.value.status.code == 200) {
            this.dispatchEvent(new CustomEvent('addSuccess', {detail: response.value.data.data}))
        } else if(error.value) {
            this.dispatchEvent(new CustomEvent('addFailure', { detail: error.value}))
        }
    }
}

const VehiclesApi = new VehiclesApiClass()
export default VehiclesApi