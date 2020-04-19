export const handleErrors = response => {
    console.log(response);
    
    //errores del api
    if(response.success === false) {
        throw response;
    }
    //otros errores
    if (response) {
        let messg = {
            success:false,
            errors:'Error de conexion'
        }
        if (response !== "TypeError: Failed to fetch") {
            throw messg;
        }
        throw messg;
    }
};

export const generalErrorApi = response => {
    throw response
};