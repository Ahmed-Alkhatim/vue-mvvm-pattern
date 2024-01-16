const checkEmptyData = (data, instance) => {
    const inputsNames = Object.keys(obj);
    for (let i = 0; i < inputsNames.length; i++) {
        if(!data[inputsNames[i]]){
            instance.isDataValid = false
        }
    }
}


const validateCompanyData = (data) => {
    let isCompanyDataValid =  true;
    const companyDataErrors = {
        public_name : [],
        company_name : [],
    }

    if(!data.public_name) {
        isCompanyDataValid = false
        companyDataErrors.public_name.push('يجب اختيار اسم الشركة')
    }  
    if(!data.company_name ) {
        isCompanyDataValid = false
        companyDataErrors.company_name.push('يجب اختيار الاسم العام للشركة')
    }

    return { companyDataErrors, isCompanyDataValid }
}


const validateUserData = (data) => {

    let isUserDataValid = true
    const userDataErrors = {
        name : [],
        birth_date : [],
        type : [],
        phone : [],
        email : [],
        identity_type : [],
        id_number : [],
        password : [],
        password_confirmation : []
    }

    // Check emptiness
    const inputsNames = Object.keys(userDataErrors);
    for (let i = 0; i < inputsNames.length; i++) {
        console.log(inputsNames[i], data[inputsNames[i]]);
        if(!data[inputsNames[i]]){
            // console.log(i, inputsNames[i], userDataErrors[inputsNames[i]]);
            isUserDataValid = false
            userDataErrors[inputsNames[i]].push(userErrorMessages[inputsNames[i]].empty)
        }
    }

    return { userDataErrors, isUserDataValid }
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


export { validateCompanyData, validateUserData }