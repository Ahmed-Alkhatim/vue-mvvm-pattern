import { defineStore } from "pinia";
import { ref } from "vue";

export const useBranchesStore = defineStore("branches", () => {

    const branches = ref([
        {}
    ])

    const setBranches = (data) => {
        branches.value = data
    }

    return { branches, setBranches}
})