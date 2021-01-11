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

/*
responseServer: function ( model, resp, opts ) {
    window.Misc.removeSpinner(this.spinner);
    if (!_.isUndefined(resp.success)) {
        // response success or error
        var text = resp.success ? '' : resp.errors;
        if (_.isObject(resp.errors)) {
            text = window.Misc.parseErrors(resp.errors);
        }

        if (!resp.success) {
            alertify.error(text);
            return;
        }

        window.Misc.redirect(window.Misc.urlFull(Route.route('facturas.show', {facturas: resp.id})));
    }

       /**
        * Build URI with route and base url
        */
     /*  parseErrors: function ( errors ){
        var text = '';
        if( _.isObject( errors ) ){

            var listError = '<ul>';

            $.each(errors, function(field, item) {
                 listError += '<li>'+ item[0] +'</li>';
            });
            listError += '</ul>';

            text = listError;
        }
        return text;
    },

    */