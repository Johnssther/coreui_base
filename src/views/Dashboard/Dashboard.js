import React, { Component } from 'react';
import WidgetO1 from '../Widgets/Widget02'
// Main Chart
import API from '../../api/api'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: ''

    }
  }
  componentDidMount() {
    this.getGastos()
  }
  getGastos() {
    this.setState({
      data: []
    })
    setTimeout(() => {
      API.getExpenses()
        .then((response) => {

          const total = response.map((item) => {
            return item.precio_total;
          })

          if (total.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var Preciototal = total.reduce(reducer);
          } else {
            var Preciototal = 0;
          }

          this.setState({
            gastoTotal: Preciototal,
          })
        })
    }, 500)
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">
        <WidgetO1
          header={'$'+this.state.gastoTotal.toString()}
          mainText='Gastos totales de este mes'
        />
      </div>
    );
  }

}

export default Dashboard;
