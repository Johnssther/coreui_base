
import React, { Component } from 'react';
import {
  Card, CardBody, Toast, ToastBody, ToastHeader,
  CardHeader,
  Label,
  Input,
  FormGroup,
  Button,
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';

import Calendario from '../../../components/calendar/calendario';
import API_REPORT from '../../../../api/reports/apiReport';
import DatatableShowGastos from './datatableShowGastosReporte'

//componentes de terceros
//Componentes de terceros
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import Select from 'react-select'

class GastosReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterDate_in: moment(),
      filterDate_out: moment(),
      gastosShow: true,
      data: [],
      inputFecha: moment(),
      loading:false,
    }
    this.getGastosReport = this.getGastosReport.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleLargeOut = this.toggleLargeOut.bind(this);
  }

  getGastosReport() {
    if (this.state.filterDate_in === '' || this.state.filterDate_out === '') {
      alert('Debe ingresar una fecha inicial y una fecha final')
      return false
    }
    this.setState({loading:true})
    let data = {
      filterDate_in: this.state.filterDate_in.format('YYYY/M/D'),
      filterDate_out: this.state.filterDate_out.format('YYYY/M/D'),
    }
    API_REPORT.getGastosReport(data)
      .then((response) => {
        console.log(response, 'Estos son los gastos de las fechas que seleccionaste');
        const data = response.map((item) => {
          return { id: item.id, fecha: item.fecha, tipo_gasto: item.tipo_gasto, cantidad: item.cantidad, gasto: item.gasto, preciounid: '$ ' + new Intl.NumberFormat().format(item.precio_unidad), precio: '$ ' + new Intl.NumberFormat().format(item.precio_total) }
        })
        this.setState({
          data,
          loading:false,
        })
      })
      .catch(e => console.log(e))
  }

  toggleLarge() {
    this.setState({ large: !this.state.large })
  }
  toggleLargeOut() {
    this.setState({ largeout: !this.state.largeout })
  }

  render() {

    return (
      <>
        <Modal isOpen={this.state.large} toggle={this.toggleLarge}
          className={'modal-danger ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Fecha</ModalHeader>
          <Calendar
            style={{ backgroundColo: 'red' }}
            onChange={filterDate_in => this.setState({ filterDate_in })}
            value={this.state.filterDate_in}
          />
        </Modal>
        <Modal isOpen={this.state.largeout} toggle={this.toggleLargeOut}
          className={'modal-danger ' + this.props.className}>
          <ModalHeader toggle={this.toggleLargeOut}>Fecha</ModalHeader>
          <Calendar
            style={{ backgroundColo: 'red' }}
            onChange={filterDate_out => this.setState({ filterDate_out })}
            value={this.state.filterDate_out}
          />
        </Modal>

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
                            <Input onClick={this.toggleLarge} value={this.state.filterDate_in.format('YYYY/M/D')} placeholder='Fecha de inicio' type="texty" id="filterDate_in" name="filterDate_in" />
                          </FormGroup>
                        </div>
                        <div className="col-sm">
                          <FormGroup>
                            <Label htmlFor="filterDate_out">Fecha Final</Label>
                            <Input onClick={this.toggleLargeOut} value={this.state.filterDate_out.format('YYYY/M/D')} placeholder='Fecha Fin' type="text" id="filterDate_out" name="filterDate_out" />
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
      </>
    );
  }
}
export default GastosReport;
{/* <Input placeholder='Fecha de inicio' type="date" id="filterDate_in" onChange={(event) => this.setState({ inputCantidad: event.target.value })} /> */ }