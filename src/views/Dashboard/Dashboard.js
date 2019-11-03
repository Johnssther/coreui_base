import React, { Component } from 'react';
// Main Chart

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      data: 'a',
      prueba: 'Dashboard'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {

    fetch('http://104.236.57.82/accesspark/public/api/historialordenesaceptadas?ordenbitacora_tecnico=2')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })

  }
  render() {
    if (this.state.data === 'a') {
    } else {
      console.log(this.state.data);

      return (
        <div className="animated fadeIn">
          <h3>Nombre del parqueadero: {this.state.data[0][2].parqueadero_nombre}</h3>
          <h3>id:  {this.state.data[0][2].id}</h3>
          <h3>Estado:  {this.state.data[0][2].parqueadero_activo === true ? 'Activo' : 'Inactivo'}</h3>
          <h3>Codigo:  {this.state.data[0][2].parqueadero_codigo}</h3>
          <h3>Cupo:  {this.state.data[0][2].parqueadero_cupo}</h3>
          <h3>Dirección:  {this.state.data[0][2].parqueadero_direccion}</h3>
          <h3>Correo Electronico: {this.state.data[0][2].parqueadero_email}</h3>
          <h3>Persona encargada: {this.state.data[0][2].parqueadero_encargado}</h3>
          <h3>Horario:  {this.state.data[0][2].parqueadero_horario}</h3>
          <h3>Horas al mes: {this.state.data[0][2].parqueadero_horas_mes}</h3>
          <h3>Teléfono:  {this.state.data[0][2].parqueadero_telefono}</h3>
          <h3>Tercero:  {this.state.data[0][2].parqueadero_tercero}</h3>

        </div>
      );
    }




    return (
      <div className="animated fadeIn">
        <h1>{this.state.prueba}</h1>
        {/* <h1>{ this.state.data[2][2].parqueadero_email }</h1> */}

      </div>
    );
  }
}

export default Dashboard;
