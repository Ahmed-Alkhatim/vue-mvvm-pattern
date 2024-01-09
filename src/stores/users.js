import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
    const users = ref([
        { "id" : "", "userable_type" : "",  "type" : "type", "userable_id" : "", "name" : "مستخدم", "email" : "aa@aa.com", "email_verified_at" : "", "password" : "", "two_factor_secret" : "", "two_factor_recovery_codes" : "", "remember_token" : "", "created_at" : "", "updated_at" : "" },
        { "id" : "", "userable_type" : "",  "type" : "type", "userable_id" : "", "name" : "مستخدم", "email" : "aa@aa.com", "email_verified_at" : "", "password" : "", "two_factor_secret" : "", "two_factor_recovery_codes" : "", "remember_token" : "", "created_at" : "", "updated_at" : "" },
        { "id" : "", "userable_type" : "",  "type" : "type", "userable_id" : "", "name" : "مستخدم", "email" : "aa@aa.com", "email_verified_at" : "", "password" : "", "two_factor_secret" : "", "two_factor_recovery_codes" : "", "remember_token" : "", "created_at" : "", "updated_at" : "" }
    ])

    const setUsers = (data) => {
        users.value = data
    }
    return { users, setUsers}
})
