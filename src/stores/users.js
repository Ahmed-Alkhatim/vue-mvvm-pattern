import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
    const users = ref([
        {}
    ])

    const setUsers = (data) => {
        users.value = data
    }
    return { users, setUsers}
})
