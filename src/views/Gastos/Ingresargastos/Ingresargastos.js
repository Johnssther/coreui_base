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
  Input,
  Label,
  Row,
  Col,
  Badge
} from 'reactstrap';

// API
import API from '../../../api/api';

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
];

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
      //Calendario
      value: moment(),
      options: [
        { value: '1', label: 'Gasto de emergencia' },
        { value: '2', label: 'Gasto Hormiga' },
        { value: '3', label: 'Gasto Ocacional' },
        { value: '4', label: 'Gasto Hormiga' },
        { value: '5', label: 'Gasto Regalos' },
      ]

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
  }

  componentDidMount() {
    this.getGastos()
    API.getTipogastos().then((response) => {
      console.log(response);
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
      // Fecha: this.state.inputFecha,
    }

    API.saveExpenses(data)
    this.handleClick()
  }

  render() {

    if (this.state.ingresargastos === true) {
      return (
        <Row>
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
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="inputFecha">Fecha</Label>
                  <Input type="text" id="inputFecha" value={this.state.value.format('YYYY/M/D')} onChange={(event) => this.setState({ inputFecha: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputCantidad">Cantidad</Label>
                  <Input type="text" id="inputCantidad" onChange={(event) => this.setState({ inputCantidad: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputGasto">Gasto</Label>
                  <Input type="text" id="inputGasto" onChange={(event) => this.setState({ inputGasto: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputTipogasto">Tipo Gasto</Label>
                  <Select options={this.state.options} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputPrecioUnidad">Precio unidad</Label>
                  <Input type="text" id="inputPrecioUnidad" onChange={(event) => this.setState({ inputPrecioUnidad: event.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputPrecioTotal">Precio Total</Label>
                  <Input type="text" id="inputPrecioTotal" onChange={(event) => this.setState({ inputPrecioTotal: event.target.value })} />
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
            selectableRows
            actions={<Button key="add" onClick={this.handleClick}>Nuevo</Button>}
            pagination={true}
          />
        </CardBody>
      </Card >
    );
  }
}

export default Ingresargastos;
