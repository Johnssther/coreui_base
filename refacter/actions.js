// addExpenses() {

//   const data = {
//     gasto: this.state.inputGasto,
//     cantidad: this.state.inputCantidad,
//     precioUnidad: this.state.inputPrecioUnidad,
//     precioTotal: this.state.inputPrecioTotal === '' ? this.state.inputCantidad * this.state.inputPrecioUnidad : this.state.inputPrecioTotal,
//     Fecha: this.state.value.format('YYYY/M/D'),
//     id_usuario: JSON.parse(localStorage.getItem('auth')).id,
//     tipogasto_id: this.state.inputTipogasto,
//     // Fecha: this.state.inputFecha,
//   }
//   const validateForm = (data) => {

//     if (data.tipogasto_id === '') {
//       this.setState({ danger: !this.state.danger, textError: 'Debe seleccionar el tipo de gasto' });
//       return false
//     }
//     if (data.gasto === '') {
//       this.setState({ danger: !this.state.danger, textError: 'Debe ingresar un gasto en el campo gasto' });
//       return false
//     }
//     if (data.cantidad === '') {
//       this.setState({ danger: !this.state.danger, textError: 'Ingrese una cantidad' });
//       return false
//     }
//     if (data.precioUnidad === '') {
//       this.setState({ danger: !this.state.danger, textError: 'Ingrese el costo por unidad' });
//       return false
//     }

//     API.saveExpenses(data)
//     this.handleClick()
//     return true
//   }
//   validateForm(data)

// }