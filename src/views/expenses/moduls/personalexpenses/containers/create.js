/* import  React from 'react';

//services
import { getExpenses } from '../services/personalexpenses'

getExpenses();

function Create() {
  return (
    <h1>Crear nuevo registro</h1>
  );
}

export default Create */


import React, { Component } from 'react'

//Componentes de terceros
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import Select from 'react-select'

import API from '../../../../../api/api';

//Componentes de terceros
// import DatePicker from 'react-datepicker2';

// calendario.
// http://clauderic.github.io/react-infinite-calendar/#/enhance-default-functionality/multiple-date-selection?_k=qkp5is

import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    Label,
    Spinner,
    Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: '',
            inputFecha: moment(),

            inputGasto: '',
            inputPrecioUnidad: '',
            inputCantidad: '',
            inputPrecioTotal: '',
            inputTipogasto: '',
            options: [],
            loading: true,
            large: false,
            textError: 'No ha ingresado ningun gasto'
        }
        this.addExpenses = this.addExpenses.bind(this);
        this.toggleLarge = this.toggleLarge.bind(this);

    }

    componentDidMount() {
        API.getTipogastos().then((response) => {
            const options = response.map((item) => {
                return { value: item.id, label: item.gasto }
            })
            this.setState({
                options,
                loading: false,
                textError: '',
            })
        })
    }

    addExpense(data) {
        const dataExpense = {
            gasto: data.gasto,
            cantidad: data.cantidad,
            precioUnidad: data.precioUnidad,
            precioTotal: data.precioTotal,
            Fecha: data.Fecha,
            id_usuario: data.id_usuario,
            tipogasto_id: data.tipogasto_id,
        }
        API.saveExpenses(dataExpense)
            .then((resp) => {
                this.props.history.push('/expenses/moduls/personalexpenses')
                console.log(resp);
                
            })
            .catch((e) => {
                console.log(e);
                
                alert('Ha ocurrido un error inesperado :(');
            })

    }

    addExpenses() {
        let data = {
            gasto: this.state.inputGasto,
            cantidad: this.state.inputCantidad,
            precioUnidad: this.state.inputPrecioUnidad,
            precioTotal: this.state.inputPrecioTotal === '' ? this.state.inputCantidad * this.state.inputPrecioUnidad : this.state.inputPrecioTotal,
            Fecha: this.state.inputFecha.format('YYYY/M/D'),
            id_usuario: JSON.parse(localStorage.getItem('auth')).id,
            tipogasto_id: this.state.inputTipogasto,
        }
        // Validaciones del formulario
        if (data.Fecha === '') {
            this.setState({ textError: 'Seleccione una fecha por favor' })
            return false
        }
        if (data.tipogasto_id === '') {
            this.setState({ textError: 'Seleccione el tipo de gasto por favor' })
            return false
        }
        if (data.cantidad === '') {
            this.setState({ textError: 'Debe ingresar la cantidad' })
            return false
        }
        if (data.gasto === '') {
            this.setState({ textError: 'No ha ingresado ningun gasto' })
            return false
        }
        if (data.precioUnidad === '') {
            this.setState({ textError: 'No ha ingresado el precio por unidad' })
            return false
        }

        this.addExpense(data)

        return true

    }

    toggleLarge() {
        this.setState({ large: !this.state.large, textError: 'Ingrese el costo por unidad' })
    }

    tipoGasto = (newValue: any, actionMeta: any) => {
        this.setState({
            inputTipogasto: newValue.value
        })
    }



    render() {
        return (
            <>
                <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                    className={'modal-danger ' + this.props.className}>
                    <ModalHeader toggle={this.toggleLarge}>Calendario</ModalHeader>
                    <ModalBody>
                        <Calendar
                            style={{ backgroundColo: 'red' }}
                            onChange={inputFecha => this.setState({ inputFecha })}
                            value={this.state.inputFecha}
                        />
                        <h6><strong>Fecha: </strong>{this.state.inputFecha.format('YYYY/M/D')}</h6>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleLarge}>Ok</Button>{' '}
                    </ModalFooter>
                </Modal>

                <Card>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="inputFecha">Fecha</Label>
                            <Input onClick={this.toggleLarge} type="text" id="inputFecha" value={this.state.inputFecha.format('YYYY/M/D')} onChange={(event) => null} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputTipogasto">Tipo Gasto</Label>
                            <Select options={this.state.options} onChange={this.tipoGasto} />
                            {this.state.loading === true ?
                                <Spinner color="success" />
                                :
                                ''
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputCantidad">Cantidad</Label>
                            <Input placeholder='Numero Total' type="text" id="inputCantidad" onChange={(event) => this.setState({ inputCantidad: event.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputGasto">Gasto</Label>
                            <Input placeholder='Ingresar Gasto' type="text" id="inputGasto" onChange={(event) => this.setState({ inputGasto: event.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputPrecioUnidad">Precio unidad</Label>
                            <Input placeholder='$ Costo Unidad' type="text" id="inputPrecioUnidad" onChange={(event) => this.setState({ inputPrecioUnidad: event.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="inputPrecioTotal">Precio Total</Label>
                            <Input placeholder='$ Costo Total (opcional)' type="text" id="inputPrecioTotal" onChange={(event) => this.setState({ inputPrecioTotal: event.target.value })} />
                        </FormGroup>
                        <Button color="primary" key="add" onClick={this.addExpenses}>Guardar</Button>
                        <h6>{this.state.textError}</h6>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default Create