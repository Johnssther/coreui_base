
import React, { Component } from 'react';
import WidgetO from '../Widgets/Widget02'
// Main Chart
import ApiDashboard from '../../api/dashboard';
import {
  Card, CardBody,
  CardHeader,
  CardColumns
} from 'reactstrap';
import Loading from '../components/loading'
import Gbarras from '../Dashboard/gbarras'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: '',
      mes: [],
      loading: true,

    }
  }
  componentDidMount() {
    this.getExpensesMonths()
    this.getExpensesMonth()

  }

  //getExpenseMont
  getExpensesMonth() {
    ApiDashboard.getTotalExpensesMonth()
      .then((response) => {
        this.setState({
          gastoTotal: response,
          loading: false
        });
      })
      .catch(e => console.log(e))
  }
  //getExpenseMonts
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


  render() {
    let mes_nombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',]
    if (this.state.loading) {
      return (
        <Loading loading={this.state.loading}></Loading>
      );
    }
    return (
      <>
        <div className="animated fadeIn">
          <WidgetO
            header={'$' + new Intl.NumberFormat().format(this.state.gastoTotal.toString())}
            mainText='Gastos totales de este mes'
          />
        </div>
        <div className="animated fadeIn">
          <div>
            <div className="row">
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

export default Dashboard;