import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Errors = () => {
    const [toggle, setToggle] = React.useState(true);

    // Toggle Modal
    const Toggle = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        // code to run on component mount
        setTimeout(() => {
            setToggle(!toggle);
        }, 3000);
    }, [])

    return (
        <>
            <Modal
                isOpen={toggle}
                // isOpen={ true }
                toggle={() => { Toggle() }}
                style={{ width: '88%' }}
                className="modal-danger"
            >
                <ModalHeader>
                    Error
                </ModalHeader>
                <ModalBody>
                    Ha ocurrido un error inesperado, por favor vuelve a intentarlo.
                </ModalBody>
                <ModalFooter>
                    Salir
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Errors