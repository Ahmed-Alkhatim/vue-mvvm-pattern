import api from "./axios"

async function useGet(route) {
    const data = await api.get(route);
    return data;
}

export default useGet