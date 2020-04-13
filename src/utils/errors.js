export const handleErrors = response => {
    console.log(response);
    if (response) {
        if (response !== "TypeError: Failed to fetch") {
            alert('Ha ocurrido un error de conexión.')
            return
        }

        alert('Ha ocurrido un error inesperado, por favor recarga tu navegador.')
    }
};

export const generalError = response => {
    if (response === 'TypeError: Network request failed') {
        // alert('Error de red', 'Verifique su conexión de internet')
    } else {
        // generic errors
    }
};