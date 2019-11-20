import React, { Component } from 'react';

//Componentes de terceros
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import Select from 'react-select'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Modal, ModalBody, ModalFooter, ModalHeader,
  Input,
  Label,
  Row,
  Col,
  Badge,
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';

// Components propios
import DatatableShowGastos from './components/datatableShowGastos'

// Peticiones api
import API from '../../../api/api';


class Ingresargastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingresargastos: false,
      data: [],
      gastoTotal: 0,
      //Input formulario
      inputFecha: '',
      inputCantidad: '',
      inputGasto: '',
      inputPrecioUnidad: '',
      inputPrecioTotal: '',
      inputTipogasto: '',
      //Calendario
      value: moment(),
      options: [],

      danger: false,
      textError: '',
      loading: true,
      dropdownOpen: new Array(6).fill(false),

    }
    this.disabledRanges = [
      {
        color: 'green',
        start: moment(),
        end: moment()
      },
    ]
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    this.tipoGasto = this.tipoGasto.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  componentDidMount() {
    this.getGastos()
    API.getTipogastos().then((response) => {
      const options = response.map((item) => {
        return { value: item.id, label: item.gasto }
      })
      this.setState({
        options,
      })
    })
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  getGastos() {
    this.setState({
      data: []
    })
    setTimeout(() => {
      API.getExpenses()
        .then((response) => {
          console.log(response);

          const total = response.map((item) => {
            return item.precio_total;
          })
          const data = response.map((item) => {
            return { fecha: item.fecha, cantidad: item.cantidad, gasto: item.gasto, preciounid: '$ ' + new Intl.NumberFormat().format(item.precio_unidad), precio: '$ ' + new Intl.NumberFormat().format(item.precio_total) }
          })


          if (total.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var Preciototal = total.reduce(reducer);
          } else {
            var Preciototal = 0;
          }

          this.setState({
            data,
            gastoTotal: Preciototal,
            loading: false,
          })
        })
    }, 500)
  }

  handleClick() {
    this.setState({
      ingresargastos: !this.state.ingresargastos,
      loading: !this.state.loading,
    })
    this.getGastos()
  }
  addExpenses() {

    const data = {
      gasto: this.state.inputGasto,
      cantidad: this.state.inputCantidad,
      precioUnidad: this.state.inputPrecioUnidad,
      precioTotal: this.state.inputPrecioTotal === '' ? this.state.inputCantidad * this.state.inputPrecioUnidad : this.state.inputPrecioTotal,
      Fecha: this.state.value.format('YYYY/M/D'),
      id_usuario: JSON.parse(localStorage.getItem('auth')).id,
      tipogasto_id: this.state.inputTipogasto,
      // Fecha: this.state.inputFecha,
    }
    const validateForm = (data) => {

      if (data.tipogasto_id === '') {
        this.setState({ danger: !this.state.danger, textError: 'Debe seleccionar el tipo de gasto' });
        return false
      }
      if (data.gasto === '') {
        this.setState({ danger: !this.state.danger, textError: 'Debe ingresar un gasto en el campo gasto' });
        return false
      }
      if (data.cantidad === '') {
        this.setState({ danger: !this.state.danger, textError: 'Ingrese una cantidad' });
        return false
      }
      if (data.precioUnidad === '') {
        this.setState({ danger: !this.state.danger, textError: 'Ingrese el costo por unidad' });
        return false
      }

      API.saveExpenses(data)
      this.handleClick()
      return true
    }
    validateForm(data)


  }
  tipoGasto = (newValue: any, actionMeta: any) => {
    console.log(newValue.value);
    this.setState({
      inputTipogasto: newValue.value
    })
  }
  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
    console.log('sesion cerrada');

  }

  render() {
    if (this.state.ingresargastos === true) {
      return (
        <Row>
          <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
            className={'modal-danger ' + this.props.className}>
            <ModalHeader toggle={this.toggleDanger}>Error al intentar registrar este gasto</ModalHeader>
            <ModalBody>
              {this.state.textError}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggleDanger}>Ok</Button>{' '}
            </ModalFooter>
          </Modal>


          <Col xs='12' sm='6'>
            <Card>
              <CardHeader>
                <strong>Nuevo gasto</strong> generado
              </CardHeader>
              <CardBody>
                <Calendar
                  style={{ backgroundColo: 'red' }}
                  onChange={value => this.setState({ value })}
                  value={this.state.value}
                />
                <h6><strong>Fecha: </strong>{this.state.value.format('YYYY/M/D')}</h6>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Ingresar gastos</strong> diarios
                <Button style={{ marginLeft: 137 }} key="add" onClick={this.handleClick}>Ver Mis gastos</Button>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="inputFecha">Fecha</Label>
                  <Input type="text" id="inputFecha" value={this.state.value.format('YYYY/M/D')} onChange={(event) => this.setState({ inputFecha: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputTipogasto">Tipo Gasto</Label>
                  <Select options={this.state.options} onChange={this.tipoGasto} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputGasto">Gasto</Label>
                  <Input placeholder='Ingresar Gasto' type="text" id="inputGasto" onChange={(event) => this.setState({ inputGasto: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputCantidad">Cantidad</Label>
                  <Input placeholder='Numero Total' type="text" id="inputCantidad" onChange={(event) => this.setState({ inputCantidad: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputPrecioUnidad">Precio unidad</Label>
                  <Input placeholder='$ Costo Unidad' type="text" id="inputPrecioUnidad" onChange={(event) => this.setState({ inputPrecioUnidad: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputPrecioTotal">Precio Total</Label>
                  <Input placeholder='$ Costo Total (opcional)' type="text" id="inputPrecioTotal" onChange={(event) => this.setState({ inputPrecioTotal: event.target.value })} />
                </FormGroup>
                <Button key="add" onClick={this.addExpenses}>Registrar</Button>
              </CardBody>
            </Card>
          </Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Dropdowns</strong>
              <div className="card-header-actions">
                <a href="https://reactstrap.github.io/components/dropdowns/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>

            {/* botones */}
            <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
              this.toggle(0);
            }}>
              <DropdownToggle caret>
                Acciones
                  </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Acción</DropdownItem>
                <DropdownItem>Actualizar</DropdownItem>
                <DropdownItem>Eliminar</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </Card>
        </Row>
      )
    }
    const title = <small>Gastos diarios. Total: <Badge className="mr-1" href="#" color="danger">{`$ ${new Intl.NumberFormat().format(this.state.gastoTotal)}`}</Badge></small>
    return (
      <DatatableShowGastos
        gastos={this.state.data}
        loading={this.state.loading}
        title={title}
        handleClick={this.handleClick}
      />
    );
  }
}

export default Ingresargastos;