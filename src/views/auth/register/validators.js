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



export { validateCompanyData }