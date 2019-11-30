import React, { Component } from 'react'

//Componentes de terceros
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import Select from 'react-select'

import API from '../../../../api/api';

//Componentes de terceros
// import DatePicker from 'react-datepicker2';

// calendario.
// http://clauderic.github.io/react-infinite-calendar/#/enhance-default-functionality/multiple-date-selection?_k=qkp5is

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    Label,
    Row,
    Col,
    Spinner,
    Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';


class AddGastosForm extends Component {
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
            this.setState({textError:'Seleccione una fecha por favor'})
            return false
        }
        if (data.tipogasto_id === '') {
            this.setState({textError:'Seleccione el tipo de gasto por favor'})
            return false
        }
        if (data.cantidad === '') {
            this.setState({textError:'Debe ingresar la cantidad'})
            return false
        }
        if (data.gasto === '') {
            this.setState({textError:'No ha ingresado ningun gasto'})
            return false
        }
        if (data.precioUnidad === '') {
            this.setState({textError:'No ha ingresado el precio por unidad'})
            return false
        }

        this.props.addExpense(data)

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
            <Row>
                {/* <Button color="danger" onClick={this.toggleLarge} className="mr-1">Ingrese un gasto </Button> */}

                <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                    className={'modal-danger ' + this.props.className}>
                    <ModalHeader toggle={this.toggleLarge}>Modal title</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Col xs='12' sm='6'>
                    <Card>
                        <CardHeader>
                            <strong>Nuevo gasto</strong> generado
                            <Button
                                onClick={this.toggleLarge}
                            >
                                Abrir modal
                            </Button>
                        </CardHeader>
                        <CardBody>
                            <Calendar
                                style={{ backgroundColo: 'red' }}
                                onChange={inputFecha => this.setState({ inputFecha })}
                                value={this.state.inputFecha}
                            />
                            <h6><strong>Fecha: </strong>{this.state.inputFecha.format('YYYY/M/D')}</h6>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="6">
                    <Card>
                        <CardHeader>
                            <strong>Ingresar gastos</strong> diarios
                            <Button style={{ marginLeft: 137 }} key="add" onClick={this.props.handleClick}>Ver Mis gastos</Button>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label htmlFor="inputFecha">Fecha</Label>
                                <Input type="text" id="inputFecha" value={this.state.inputFecha.format('YYYY/M/D')} onChange={(event) => null} />
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
                            <Button key="add" onClick={this.addExpenses}>Guardar</Button>
                            <h6>{this.state.textError}</h6>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default AddGastosForm