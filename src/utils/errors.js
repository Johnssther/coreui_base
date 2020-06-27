import Swal from 'sweetalert2'

export const handleErrors = response => {
    console.log(response);

    //errores del api
    if (response.success === false) {
        throw response;
    }
    //otros errores
    if (response) {
        let messg = {
            success: false,
            errors: 'Ocurrio un error inesperado de conexión por favor recargue su navegador nuevamente.'
        }
        Swal.fire({
            title: 'Atención',
            text: messg.errors,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, recargar de nuevo'
        }).then((result) => {
            if (result.value) {
                window.location.reload();

            }
        })
        if (response !== "TypeError: Failed to fetch") {
            throw messg;
        }
        throw messg;

    }
};

export const generalErrorApi = response => {
    throw response
};