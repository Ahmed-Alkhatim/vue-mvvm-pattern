import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref({})

    const setUser = (data) => {
        console.log('fired hahahah');
        user.value = data
    }

    return { user, setUser }
})