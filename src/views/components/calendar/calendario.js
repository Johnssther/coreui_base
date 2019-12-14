import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import moment from 'moment-jalaali'
import { Calendar } from 'react-datepicker2';

class ComponentDate extends Component {
    constructor(props) {
    super(props);
    this.state = {
      danger: false,
      inputFecha: moment(),
    };

    this.toggleDanger = this.toggleDanger.bind(this);
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

    render() {
        return(
            <>
                {/* <Button color="danger" onClick={this.toggleDanger} className="mr-1">Danger modal</Button> */}
                { this.props.child }
                <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
                       className={this.props.className}>
                  <ModalHeader toggle={this.toggleDanger}>Seleccione una fecha</ModalHeader>
                  <ModalBody>
                  <Calendar
                        style={{ backgroundColo: 'red' }}
                        onChange={inputFecha => this.setState({ inputFecha })}
                        value={this.state.inputFecha}
                    />
                  </ModalBody>
                </Modal>
            </>
        );
    }
}
export default ComponentDate