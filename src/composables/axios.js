import axios from "axios"
const api = axios.create({
  baseURL: 'https://dapi.cardscart.net/api/v1/admin'
})
 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers["Authorization"] = `Bearer ${token}` 
  }
  config.headers['X-Authorization'] = 'tYMVvb8EzBpDGVfpHBPsR0M4qiWrciqjt5RfBTKvBhrr40j87nejUSxRhCwU3FD3'
  config.headers["Accept"] = "application/json"
  return config
})

export default api
