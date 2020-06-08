import React from 'react';
import './loading.css';
import Swal from 'sweetalert2'


function Loading() {

    return (
        <>
            <div class="container">

                <div class="row">
                    <div class="col-md-3 offset-md-4">
                        <div className="container center-block">

                            <div class="lds-facebook">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h4>Cargando...</h4>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Loading;