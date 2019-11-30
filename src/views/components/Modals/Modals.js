import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: true,
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
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        {
          this.props.modal === 'toggle' ?
            <Button onClick={this.toggle} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleLarge' ?
            <Button onClick={this.toggleLarge} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleSmall' ?
            <Button onClick={this.toggleSmall} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'togglePrimary' ?
            <Button onClick={this.togglePrimary} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleDanger' ?
            <Button onClick={this.toggleDanger} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleWarning' ?
            <Button onClick={this.toggleWarning} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleSuccess' ?
            <Button onClick={this.toggleSuccess} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {
          this.props.modal === 'toggleInfo' ?
            <Button onClick={this.toggleInfo} className="mr-1">{this.props.name}</Button>
            : ''
        }
        {/* buttons */}
        {/* 
        
        
        <Button onClick={this.toggleSmall} className="mr-1">Launch small modal</Button>
        <Button color="primary" onClick={this.togglePrimary} className="mr-1">Primary modal</Button>
        <Button color="danger" onClick={this.toggleDanger} className="mr-1">Danger modal</Button>
        <Button color="warning" onClick={this.toggleWarning} className="mr-1">Warning modal</Button>
        <Button color="success" onClick={this.toggleSuccess} className="mr-1">Success modal</Button>
        <Button color="info" onClick={this.toggleInfo} className="mr-1">Info modal</Button> */}

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            { this.props.children }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.large === this.props.cerrarmodal ? false:true} toggle={this.toggleLarge}
          className={'modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Modal title</ModalHeader>
          <ModalBody>
            { this.props.children }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLarge}>Finalizar</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button> */}
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.small} toggle={this.toggleSmall}
          className={'modal-sm ' + this.props.className}>
          <ModalHeader toggle={this.toggleSmall}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleSmall}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleSmall}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglePrimary}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
          className={'modal-success ' + this.props.className}>
          <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
          className={'modal-warning ' + this.props.className}>
          <ModalHeader toggle={this.toggleWarning}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggleWarning}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
          className={'modal-danger   ' + this.props.className}>
          <ModalHeader toggle={this.toggleDanger}>Modal title</ModalHeader>
          <ModalBody>
            { this.props.children }  
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDanger}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.info} toggle={this.toggleInfo}
          className={'modal-info ' + this.props.className}>
          <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default Modals;
