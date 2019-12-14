
import React, { Component } from 'react';
import {
  Card, CardText, CardBody, Toast, ToastBody, ToastHeader,
  CardHeader,
  Form,
  Label,
  Input,
  FormGroup,
  CardFooter,
  Button,
} from 'reactstrap';
import Calendario from '../../../components/calendar/calendario';
import API_REPORT from '../../../../api/reports/apiReport';
import DatatableShowGastos from './datatableShowGastosReporte'

class GastosReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterDate_in: '',
      filterDate_out: '',
      gastosShow: true,
      data: [],
    }
    this.getGastosReport = this.getGastosReport.bind(this);
  }
  getGastosReport() {
    if (this.state.filterDate_in === '' || this.state.filterDate_out === '') {
      alert('Debe ingresar una fecha inicial y una fecha final')
      return false
    }
    let data = {
      filterDate_in: this.state.filterDate_in,
      filterDate_out: this.state.filterDate_out,
    }
    API_REPORT.getGastosReport(data)
      .then((response) => {
        console.log(response, 'Estos son los gastos de las fechas que seleccionaste');
        const data = response.map((item) => {
          return { id: item.id, fecha: item.fecha, tipo_gasto: item.tipo_gasto, cantidad: item.cantidad, gasto: item.gasto, preciounid: '$ ' + new Intl.NumberFormat().format(item.precio_unidad), precio: '$ ' + new Intl.NumberFormat().format(item.precio_total) }
        })
        this.setState({
          data,
        })
      })
      .catch(e => console.log(e))
  }
  render() {
    console.log('====================================');
    console.log(this.state.data);
    console.log('====================================');

    return (
      <div className="animated fadeIn">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <Card>
                  <CardHeader>
                    <strong>Obtener Gastos</strong>
                  </CardHeader>
                  <CardBody>
                    <div className="row">
                      <div className="col-sm">
                        <FormGroup>
                          <Label htmlFor="filterDate_in">Fecha Inicial</Label>
                          <Input placeholder='Fecha de inicio' type="date" id="filterDate_in" name="filterDate_in" onChange={(event) => this.setState({ filterDate_in: event.target.value })} />
                        </FormGroup>
                      </div>
                      <div className="col-sm">
                        <FormGroup>
                          <Label htmlFor="filterDate_out">Fecha Final</Label>
                          <Input placeholder='Fecha Fin' type="date" id="filterDate_out" name="filterDate_out" onChange={(event) => this.setState({ filterDate_out: event.target.value })} />
                        </FormGroup>
                      </div>
                      <div className="col-sm">
                        <FormGroup>
                          <Button color="primary" key="add" onClick={this.getGastosReport}>Obtener</Button>
                        </FormGroup>
                      </div>
                    </div>
                    <DatatableShowGastos
                      gastos={this.state.data}
                      loading={this.state.loading}
                      title={''}
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GastosReport;
{/* <Input placeholder='Fecha de inicio' type="date" id="filterDate_in" onChange={(event) => this.setState({ inputCantidad: event.target.value })} /> */ }