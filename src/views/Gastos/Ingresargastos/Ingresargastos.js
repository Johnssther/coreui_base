import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, CardHeader } from 'reactstrap';
// Tablas

const data = [
  { fecha: '1 nov 2019', cantidad: 3, producto: 'empanadas', preciounid: '$1.000', precio: '$3.000' },
  { fecha: '1 nov 2019', cantidad: 1, producto: 'pan jamo y queso', preciounid: '$1.000', precio: '$1.000' },
  { fecha: '1 nov 2019', cantidad: 10, producto: 'pan rollo', preciounid: '$200', precio: '$1.000' },
  { fecha: '1 nov 2019', cantidad: 2, producto: 'empanadas', preciounid: '$1.600', precio: '$3.200' },
  { fecha: '1 nov 2019', cantidad: 1, producto: 'leche', preciounid: '$2.800', precio: '$2.800' },
];
const columns = [
  {
    name: 'Fecha',
    selector: 'fecha',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.fecha}</div>{row.summary}</div>,

  },
  {
    name: 'Cantidad',
    selector: 'cantidad',
    sortable: true,
  },
  {
    name: 'Producto',
    selector: 'producto',
    sortable: true,
  },
  {
    name: 'Precio Unid.',
    selector: 'preciounid',
    sortable: true,
  },
  {
    name: 'Precio',
    selector: 'precio',
    sortable: true,
    right: true,
  },
];

class Ingresargastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
        { fecha: '1 nov 2019', cantidad: 3, producto: 'empanadas', preciounid: '$1.000', precio: '$3.000' },
        { fecha: '1 nov 2019', cantidad: 1, producto: 'pan jamo y queso', preciounid: '$1.000', precio: '$1.000' },
        { fecha: '1 nov 2019', cantidad: 10, producto: 'pan rollo', preciounid: '$200', precio: '$1.000' },
        { fecha: '1 nov 2019', cantidad: 2, producto: 'empanadas', preciounid: '$1.600', precio: '$3.200' },
        { fecha: '1 nov 2019', cantidad: 1, producto: 'leche', preciounid: '$2.800', precio: '$2.800' },
      ]
    }
  }
  componentDidMount() {
    fetch('http://localhost/coysa/public/api/gastos')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })
        console.log(data, 'sd');
        

      })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>Usuarios</strong>
          <small> Usuarios</small>
        </CardHeader>
        <CardBody>
          <DataTable
            title="Gastos diarios"
            columns={columns}
            data={data}
            highlightOnHover={true}
          />
        </CardBody>
      </Card>
    );
  }
}

export default Ingresargastos;
