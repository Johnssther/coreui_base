import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Errors = (props) => {
    const { text } = props
    const [toggle, setToggle] = React.useState(false);

    // Toggle Modal
    const toggleDanger = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <Modal
                isOpen={toggle}
                // isOpen={ true }
                toggle={() => { toggleDanger() }}
                style={{ width: '88%' }}
                className="modal-danger"
            >
                <ModalHeader>
                    Error
                </ModalHeader>
                <ModalBody>
                    {text.error}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggleDanger}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggleDanger}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Errors