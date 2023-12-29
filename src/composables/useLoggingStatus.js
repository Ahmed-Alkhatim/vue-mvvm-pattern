import { onMounted } from "vue"

export const useLoggingStatus = () => {
    const isUserLoggedIn = localStorage.getItem('token')
    onMounted( () => {
        if (!isUserLoggedIn && window.location.pathname != "/login") {
            window.location = "/login"
        } else if (isUserLoggedIn && window.location.pathname == "/login") {
            window.location = "/"
        }
    })
} 
