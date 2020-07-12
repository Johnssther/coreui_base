
import React, { Component } from 'react';
// Main Chart
import ApiDashboard from '../../api/dashboard';
import Carrucelinfinite from '../components/carrucelinfinite';
import Main from '../layout/main'

import {
  Card, CardBody,
  CardHeader, CardColumns
} from 'reactstrap';

import Loading from '../components/loading'
import Gbarras from '../Dashboard/gbarras'
import Datos from '../Dashboard/table'

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
      color: '#F55457',
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
      .catch(e => {
        console.log(e)
         this.setState({
          loading: false
        });
      })
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
      .catch(e => {
        console.log(e)
         this.setState({
          loading: false
        });
      })
  }
  //getExpenseMonts
  async onChangeSelect(value) {
    await this.setState({ valueSelectExpensestype: value })
    this.getExpensesMonth(this.state.valueSelectExpensestype)
  }



  render() {

    if (this.state.loading) {
      return (
        <Loading loading={this.state.loading}></Loading>
      );
    }
    return (
      <Main success={false}>

        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Select
              className="is-invalid"
              options={this.state.expensestype}
              onChange={(newValue) => { this.onChangeSelect(newValue.value) }}
            />
          </div>
        </div>


        <CardColumns className="cols-2">
          <Gbarras mes={this.state.mes} color={this.state.color} />
          <Card>
            <CardHeader>
              Mis datos de este mes
          </CardHeader>
            <CardBody>
              <div className="row">
                <div className="col">
                  <Card onClick={() => this.setState({ color: 'green' })}>
                    <CardHeader style={{ background: '#4caf50' }} className="bg-success text-white">
                      Ingresos
                </CardHeader>
                    <CardBody>
                      <h3>
                        {'$0.00'}
                      </h3>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Card onClick={() => this.setState({ color: 'red' })}>
                    <CardHeader style={{ background: '#f50057' }} className="text-white">
                      Gastos
                </CardHeader>
                    <CardBody>
                      <h3>
                        {'$' + new Intl.NumberFormat().format(this.state.gastoTotal.toString())}
                      </h3>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Card onClick={() => this.setState({ color: 'orange' })}>
                    <CardHeader style={{ background: 'orange' }} className="text-white">
                      Ahorro
                </CardHeader>
                    <CardBody>
                      <h3>
                        {'$0.00'}
                      </h3>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </CardColumns>

        <Datos />
      </Main>
    );
  }

}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.createpersonalexpense,
})

export default connect(mapStateToProps)(Dashboard)