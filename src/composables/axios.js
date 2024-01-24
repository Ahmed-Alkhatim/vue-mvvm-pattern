import axios from "axios"
const api = axios.create({
  baseURL: 'https://petro.amyal.sa/api/'
})
 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers["Authorization"] = `Bearer ${token}` 
  }
  config.headers['X-Authorization'] = ''
  config.headers["Accept"] = "application/json"
  return config
})

export default api
