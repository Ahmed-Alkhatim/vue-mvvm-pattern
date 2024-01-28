import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')))

    const setUser = (data) => {
        user.value = data
    }

    return { user, setUser }
})