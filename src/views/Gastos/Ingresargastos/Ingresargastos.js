import React, { Component } from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
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
  Spinner
} from 'reactstrap';

// API
import API from '../../../api/api';

const rowTheme = {
  header: {
    borderColor: 'transparent',
  },
  rows: {
    // spaced allows the following properties
    spacing: 'spaced',
    spacingBorderRadius: '50px',
    spacingMargin: '3px',

    borderColor: 'rgba(0,0,0,.12)',
    backgroundColor: 'white',
    height: '52px',
  },
  cells: {
    cellPadding: '48px',
  },
  footer: {
    separatorStyle: 'none',
  },
};

const columns = [
  {
    name: 'Fecha',
    selector: 'fecha',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.fecha}</div>{row.summary}</div>,

  },
  {
    name: 'Cantidad',
    selector: 'cantidad',
    sortable: true,
  },
  {
    name: 'Gasto',
    selector: 'gasto',
    sortable: true,
  },
  {
    name: 'Precio Unid.',
    selector: 'preciounid',
    sortable: true,
  },
  {
    name: 'Precio Total',
    selector: 'precio',
    sortable: true,
    // right: true,
  },
  {
    name: 'Acciones',
    selector: 'Editar',
    sortable: true,
    cell: () => 
    <div>
      {/* <button onClick={()=>{alert('eliminar')}}>Eliminar</button>
      <button onClick={()=>{alert('actualizar')}}>Actualizar</button> */}
    </div>
  },
];

class Ingresargastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingresargastos: true,
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
      loading:true,

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
    //select


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
            loading:false,
          })
        })
    }, 500)
  }

  handleClick() {
    this.setState({
      ingresargastos: !this.state.ingresargastos,
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
        </Row>
      )
    }
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>Gastos diarios</strong>
          <small> Gastos </small>

        </CardHeader>
        <CardBody>
          <DataTable
            title={<small>Gastos diarios. Total: <Badge className="mr-1" href="#" color="danger">{`$ ${new Intl.NumberFormat().format(this.state.gastoTotal)}`}</Badge></small>}
            columns={columns}
            data={this.state.data}
            highlightOnHover={true}
            actions={<Button key="add" onClick={this.handleClick}>Nuevo</Button>}
            pagination={true}
            progressPending={this.state.loading}
            progressComponent={<Spinner animation="border" variant="primary" />}
            customTheme={rowTheme}
            expandableRows
            expandableRowsComponent={<div>Gasto.</div>}
            expandOnRowClicked
          />
        </CardBody>
      </Card >
    );
  }
}

export default Ingresargastos;