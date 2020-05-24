import React from 'react';
import './loading.css';

function Loading() {
    return (
        <>
            <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h4>Cargando...</h4>
        </>
    );
}

export default Loading;