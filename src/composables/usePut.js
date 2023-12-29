
import api from "./axios"

async function usePut(route, data) {
    const response = await api.put(route, data);
    return response
}

// http://clinic.tadamun.net/


export default usePut