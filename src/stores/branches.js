import { defineStore } from "pinia";
import { ref } from "vue";

export const useBranchesStore = defineStore("branches", () => {
    // States
    const branches = ref([
        { "id" : "1", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "2", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "3", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "4", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "5", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
       
    ])
    
    // Actions
    const setBranches = (data) => {
        branches.value = data
    }

    return { branches, setBranches}
})

/* 
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""},
        { "id" : "", "parent_id" : "", "name" : "فرع 1", "public_name" : "الفرع الرئيسي", "brand_image" : "124548544", "commercial_record" : "353636747", "bank" : "الراجحي", "iban" : "124548544", "account_number" : "124548544", "tax_number" : "124548544" , "tax_value" : "30%", "type" : "النوع", "address" : "", "status" : "مغلق", "created_at" : "", "updated_at" : ""}
    
    */