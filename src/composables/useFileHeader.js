import api from "./axios";
const useFileHeader = () => {
    api.interceptors.request.use((config) => {
        config.headers["Content-Type"] = "multipart/form-data"
        config.headers[ "Accept-Encoding"] = "gzip, deflate, br"
        config.headers["Connection"]= "keep-alive"
      
        return config
    })
}

export default useFileHeader
;
