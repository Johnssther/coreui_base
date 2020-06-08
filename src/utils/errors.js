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
            errors:'Ocurrio un error inesperado de conexión por favor recargue su navegador nuevamente.'
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