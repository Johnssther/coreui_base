
import React, { Component } from 'react';
import WidgetO from '../Widgets/Widget02'
// Main Chart
import ApiDashboard from '../../api/dashboard';
import {
  Card, CardBody,
  CardHeader,
  CardColumns,
  Col,
  Row,
  FormGroup,
} from 'reactstrap';

import Loading from '../components/loading'
import Gbarras from '../Dashboard/gbarras'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { connect } from 'react-redux'
import Select from 'react-select'

import { getExpensesType } from '../../services/expenses/expensestype'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: '',
      mes: [],
      loading: true,
      expensestype: [],
      valueSelectExpensestype: '',
    }
  }
  async componentDidMount() {
    this.getExpensesMonths()
    this.getExpensesMonth()
    await getExpensesType();

    const expensestype = await this.props.expensestypes.map((item) => {
      return { value: item.id, label: item.gasto }
    })

    this.setState({
      expensestype
    })

  }

  //getExpenseMont card
  getExpensesMonth(data) {
    ApiDashboard.getTotalExpensesMonth(data)
      .then((response) => {
        this.setState({
          gastoTotal: response,
          loading: false
        });
      })
      .catch(e => console.log(e))
  }
  //getExpenseMonts slider
  getExpensesMonths() {
    ApiDashboard.getTotalExpensesMonths()
      .then((response) => {
        this.setState({
          mes: response,
          loading: false
        });
      })
      .catch(e => console.log(e))
  }
  //getExpenseMonts
  async onChangeSelect(value) {
    await this.setState({ valueSelectExpensestype: value })
    this.getExpensesMonth(this.state.valueSelectExpensestype)
  }



  render() {

    let mes_nombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',]
    if (this.state.loading) {
      return (
        <Loading loading={this.state.loading}></Loading>
      );
    }
    return (
      <>
        
        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Select
              className="is-invalid"
              options={this.state.expensestype}
              onChange={(newValue) => { this.onChangeSelect(newValue.value) }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="animated fadeIn">
              <WidgetO
                header={'$' + new Intl.NumberFormat().format(this.state.gastoTotal.toString())}
                mainText='Gastos totales de este mes'
              />
            </div>
          </div>
        </div>

        <div className="animated fadeIn">
          <div>
            <div className="row topContainer">
              {this.state.mes.map(
                (item, index) =>
                  <div className="col-sm" key={index}>
                    <Card>
                      <CardHeader className="bg-primary">
                        <h4> {mes_nombre[item.mes - 1]} {item.anio} </h4>
                      </CardHeader>
                      <CardBody className="bg-info text-dark">
                        Gastos: <h3> {`$ ${new Intl.NumberFormat().format(item.precio_total_mes)}`} </h3>
                        <hr></hr>
                      </CardBody>
                      {/* <CardFooter>
                          <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Imprimir Gastos</Button>
                        </CardFooter> */}
                    </Card>
                  </div>
              )
              }

            </div>
          </div>
        </div>
        <Gbarras mes={this.state.mes} />

      </>
    );
  }

}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.createpersonalexpense,
})

export default connect(mapStateToProps)(Dashboard)