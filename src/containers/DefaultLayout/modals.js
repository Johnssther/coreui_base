import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            large: false,
            small: false,
            primary: false,
            success: false,
            warning: false,
            danger: false,
            info: false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggleLarge = this.toggleLarge.bind(this);
        this.toggleSmall = this.toggleSmall.bind(this);
        this.togglePrimary = this.togglePrimary.bind(this);
        this.toggleSuccess = this.toggleSuccess.bind(this);
        this.toggleWarning = this.toggleWarning.bind(this);
        this.toggleDanger = this.toggleDanger.bind(this);
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    toggleLarge() {
        this.setState({
            large: !this.state.large,
        });
    }

    toggleSmall() {
        this.setState({
            small: !this.state.small,
        });
    }

    togglePrimary() {
        this.setState({
            primary: !this.state.primary,
        });
    }

    toggleSuccess() {
        this.setState({
            success: !this.state.success,
        });
    }

    toggleWarning() {
        this.setState({
            warning: !this.state.warning,
        });
    }

    toggleDanger() {
        this.setState({
            danger: !this.state.danger,
        });
        console.log('sesion cerrada');
        
    }

    toggleInfo() {
        this.setState({
            info: !this.state.info,
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
