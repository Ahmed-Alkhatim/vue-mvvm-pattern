
const validateCompanyData = (data) => {
    let isCompanyDataValid =  true;
    const companyDataErrors = {
        public_name : [],
        company_name : [],
        commercial_record : [],
    }

    if(!data.company_name) {
        isCompanyDataValid = false
        companyDataErrors.public_name.push('يجب اختيار اسم الشركة')
    }  
   
    if(!data.commercial_record ) {
        isCompanyDataValid = false
        companyDataErrors.company_name.push('السجل التجاري مطللوب')
    }

    return { companyDataErrors, isCompanyDataValid }
}


const validateUserData = (data) => {

    let isUserDataValid = true
    const userDataErrors = { name : [], birth_date : [], phone : [], identity_type : [], id_number : []}

    // Check emptiness
    const inputsNames = Object.keys(userDataErrors);
    for (let i = 0; i < inputsNames.length; i++) {
        if(!data[inputsNames[i]]){
            isUserDataValid = false
            userDataErrors[inputsNames[i]].push(userErrorMessages[inputsNames[i]].empty)
        }
    }

    return { userDataErrors, isUserDataValid }
}


const validateLoginData = (data) => {
    let isLoginDataValid = true
    const loginDataErrors = {email : [], password : [], password_confirmation : [] }
    const inputsNames = Object.keys(loginDataErrors)
    for (let i = 0; i < inputsNames.length; i++) {
        if(!data[inputsNames[i]]) {
            isLoginDataValid = false
            loginDataErrors[inputsNames[i]].push(userErrorMessages[inputsNames[i]].empty)
        }
    }   

    return { isLoginDataValid, loginDataErrors }
}








const userErrorMessages = {
    name : {
        empty : "يجب أن لا يكون الإسم فارغا"
    },
    birth_date : {
        empty : "يجب تحديد تاريخ الميلاد"
    },
    type : {
        empty : "النوع مطلوب"
    },
    email : {
        empty : "يجب أن لا يكون البريد الإلكتروني فارغا"
    },
    phone : {
        empty : "رقم الهاتف مطلوب"
    },
    identity_type : {
        empty : "نوع الهوية مطلوب"
    },
    id_number : {
        empty : "رقم الهوية مطلوب"
    },
    password : {
        empty : "كلمة المرور مطلوبة"
    },
    password_confirmation : {
        empty  : "تأكيد كلمة المرور  "
    },

}


export { validateCompanyData, validateUserData, validateLoginData }