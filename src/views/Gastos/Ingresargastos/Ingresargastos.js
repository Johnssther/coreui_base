import React, { Component } from 'react';

//Componentes de terceros
import moment from 'moment-jalaali'

import {
  Badge,
} from 'reactstrap';

// Components propios
import DatatableShowGastos from './components/datatableShowGastos'
import AddGastosForm from './components/addGastosForm'

// Peticiones api
import API from '../../../api/api';


class Ingresargastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingresargastos: false,
      data: [],
      gastoTotal: 0,
      loading: true,
      cerrarmodal: false,
    }
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.getGastos()
    API.getExpensesType().then((response) => {
      const options = response.map((item) => {
        return { value: item.id, label: item.gasto }
      })
      this.setState({
        options,
      })
    })
  }

  getGastos() {
    this.setState({
      data: []
    })
    let data = {
      mes: null,
    }
    API.getExpenses(data)
      .then((response) => {

        const total = response.map((item) => {
          return item.precio_total;
        })
        const data = response.map((item) => {
          return { id: item.id, fecha: item.fecha, tipo_gasto: item.tipo_gasto, cantidad: item.cantidad, gasto: item.gasto, preciounid: '$ ' + new Intl.NumberFormat().format(item.precio_unidad), precio: '$ ' + new Intl.NumberFormat().format(item.precio_total) }
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
  }

  addExpense(data) {
    const dataExpense = {
      gasto: data.gasto,
      cantidad: data.cantidad,
      precio_unidad: data.precioUnidad,
      precio_total: data.precioTotal,
      fecha: data.Fecha,
      user_id: data.id_usuario,
      tipogasto_id: data.tipogasto_id,
    }
    console.log(dataExpense);

    API.saveExpenses(dataExpense)
      .then((resp) => {
        this.handleClick()
      })
      .catch((e) => {
        alert('Ha ocurrido un error inesperado :(');
      })

  }

  handleClick() {
    this.setState({
      ingresargastos: !this.state.ingresargastos,
      cerrarmodal: !this.state.cerrarmodal,
      // loading: !this.state.loading,
    })
    this.getGastos()
  }


  render() {
    const title = <small>Gastos diarios. Total: <Badge className="mr-1" href="#" color="danger">{`$ ${new Intl.NumberFormat().format(this.state.gastoTotal)}`}</Badge></small>
    return (
      <DatatableShowGastos
        gastos={this.state.data}
        loading={this.state.loading}
        title={title}
        addExpense={this.addExpense}
        handleClick={this.handleClick}
        cerrarmodal={this.state.cerrarmodal}
      />
    );
  }
}

export default Ingresargastos;