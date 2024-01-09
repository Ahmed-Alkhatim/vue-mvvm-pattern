import { defineStore } from "pinia";
import { ref } from "vue";

export const useTransactionsStore = defineStore( "transactions", () => {
    const transactions = ref([
      {  "id" : "", "wallet_id" : "", "amount" : "amount", "type" : "type", "operation" : "operation", "comment" : "comment", "status" : "status", "image" : "", "created_at" : "", "updated_at" : "" }
    ])

    const setTransactions = (data) => {
        transactions.value = data
    }


    return { transactions , setTransactions}
})