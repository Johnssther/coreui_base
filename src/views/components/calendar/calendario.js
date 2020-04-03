import React from 'react';
import { useField } from 'formik';
import { Modal, ModalBody } from 'reactstrap';
import moment from 'moment-jalaali'
import { Calendar } from 'react-datepicker2';

const InputCalendar = ({ label, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;
  const [didFocus, setDidFocus] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [inputFecha, setInputFecha] = React.useState(moment());

  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  // Toggle Modal
  const Toggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor={field.name}>{label}</label>
        <input
          className={`form-control ${showFeedback ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
          {...field}
          {...props}
          placeholder={placeholder}
          onFocus={handleFocus}
          onClick={() => { Toggle() }}
        />
        <div className={`valid-feedback`}>
          Completado
        </div>
        <div className={`invalid-feedback`}>
          {meta.error}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={toggle}
        toggle={() => { Toggle() }}
        fade={false}
        style={{ width: '88%' }}
      >
        <ModalBody
        >
          <Calendar
            style={{ backgroundColor: 'red' }}
            onChange={inputFecha => { setValue((inputFecha.format('YYYY/M/D'))); setInputFecha(inputFecha) }}
            value={inputFecha}
          />
        </ModalBody>
      </Modal>
    </>
  );

};
export default InputCalendar




/*

import React, { Component } from 'react'
import { Modal, ModalBody, Input } from 'reactstrap';
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
    console.log(this.state.inputFecha);
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="">Ingrese una Fecha</label>
            <Input onClick={this.toggleDanger} value={this.state.inputFecha} className="mr-1 is-valid" placeholder="Seleccione una fecha">Fecha</Input>
            <div className={`valid-feedback`}>
              Completado
            </div>
        </div>

        {this.props.child}
        <Modal
          isOpen={this.state.danger}
          toggle={this.toggleDanger}
          fade={false}
          style={{ width: '88%' }}
        >
          <ModalBody
          >
            <Calendar
              style={{ backgroundColor: 'red' }}
              onChange={inputFecha => this.setState({ inputFecha })}
              value={this.state.inputFecha}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default ComponentDate */