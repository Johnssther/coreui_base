import React, { useState } from 'react';
import {
    Container,
    Alert
} from 'reactstrap';
import Errors from '../components/error'

const Main = (props) => {
    const { children, success } = props;
    
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    return (
        <div>
            {/* {success.success === false ? null :
                <Alert className="bg-danger" isOpen={visible}>
                    <b>Error: {success.error}</b><br></br>
                    <b>{success.error === 'Error de conexion' ? 'Ocurrio un error inesperado al momento de intetar establecer conexión por favor recargue su navegador nuevamente.':''}  </b><br></br>
                </Alert>
            } */}
            {/* <Errors text={success} /> */}
            {children}
        </div>
    );
};

export default Main