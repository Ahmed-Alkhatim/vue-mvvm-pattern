import { onMounted } from "vue"
import { useRouter } from "vue-router"
export const useLoggingStatus = () => {
    const router = useRouter()
    const isUserLoggedIn = localStorage.getItem('token')
    onMounted( () => {
        if (!isUserLoggedIn && window.location.pathname != "/login") {
            router.push("/login")
        } else if (isUserLoggedIn && window.location.pathname == "/login") {
            router.push("/")
        }
    })
} 
