import React, { Component } from 'react';
import { Button, CardText, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            danger: false,
        };

        this.toggleDanger = this.toggleDanger.bind(this);
    }

    toggleDanger() {
        this.setState({
            danger: !this.state.danger,
        });
        
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                    <CardText onClick={this.toggleDanger}>Salir</CardText>
                        <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
                            className={'modal-danger ' + this.props.className}>
                            <ModalHeader toggle={this.toggleDanger}>Cerrar Sesión</ModalHeader>
                            <ModalBody>
                                ¿ Está seguro de salir de la aplicación ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.toggleDanger}>Si</Button>{' '}
                                <Button color="secondary" onClick={this.toggleDanger}>No</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dialog;
