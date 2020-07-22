
import React, { Component } from 'react';
// Main Chart
import ApiDashboard from '../../api/dashboard';
import Carrucelinfinite from '../components/carrucelinfinite';
import { Link } from 'react-router-dom';
import Main from '../layout/main'

import {
  Card, CardBody,
  Alert,
} from 'reactstrap';

import Loading from '../components/loading'
import Gbarras from '../Dashboard/gbarras'
import Datos from '../Dashboard/table'

import { connect } from 'react-redux'
import Select from 'react-select'

import { getExpensesType } from '../../services/expenses/expensestype'
import { indexRevenue, storeRevenue, showRevenue, updateRevenue, deleteRevenue } from '../../services/revenues/revenues'

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
            <Alert color="success">
              Novedades:  <br></br>
              -Ahora puedes registrar tus ingresos y verlos en el modulo de ingresos que hemos creado para tí. <br></br>
              -Una vista mas limpia y minimalista. <br></br>
              -Aun continuamos mejorando. <br></br>
              <Link title="Ir al modulo de ingresos" className="btn btn-warning" to={`/revenues`}>Explorar</Link>

            </Alert>
            <Select
              className="is-invalid"
              options={this.state.expensestype}
              onChange={(newValue) => { this.onChangeSelect(newValue.value) }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Card style={{ borderRadius: '10px' }}>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <h6>Mis Gastos</h6>
                    <h3>{'$' + new Intl.NumberFormat().format(this.state.gastoTotal.toString())}</h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Gbarras mes={this.state.mes} color={this.state.color} />
          </div>
        </div>
        {/* <Datos /> */}
      </Main>
    );
  }

}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.createpersonalexpense,
})

export default connect(mapStateToProps)(Dashboard)