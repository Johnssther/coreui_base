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
        <Container>
            {success.success === false ? null :
                <Alert style={{ background: '#f44336', color: 'white' }} isOpen={visible} toggle={onDismiss}>
                    <b>Error: {success.error} </b>
                </Alert>
            }
            <Errors text={success} />
            {children}
        </Container>
    );
};

export default Main