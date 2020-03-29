import React, { Component } from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

const rowTheme = {
  header: {
    borderColor: 'transparent',
  },
  rows: {
    //Propiedades de la tabla
    // spacing: 'spaced',
    spacingBorderRadius: '7px',
    spacingMargin: '1px',
    backgroundColor: 'white',
  },
  cells: {
  },
  footer: {
    separatorStyle: 'none',
  },
};

const columns = [
  {
    name: 'Fecha',
    selector: 'fecha',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.fecha}</div>{row.summary}</div>,
    grow:0,

  },
  {
    name: 'Tipo de gasto',
    selector: 'tipo_gasto',
    sortable: true,
  },
  {
    name: 'Cantidad',
    selector: 'cantidad',
    sortable: true,
    grow:0,
  },
  {
    name: 'Gasto',
    selector: 'gasto',
    sortable: true,
    grow:2,
  },
  {
    name: 'Precio Unid.',
    selector: 'preciounid',
    sortable: true,
  },
  {
    name: 'Precio Total',
    selector: 'precio',
    sortable: true,
  },
  {
    cell: row => <></>,
    allowOverflow: true,
    button: true,
    width: '56px', // custom width for icon button
  },
];

const LinearIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
};


function IndexComponent(props) {
  const { expenses, loading } = props;
  return (
    <Card>
      <CardHeader>
        <i className="fa fa-align-justify"></i><strong>Daily Expenses</strong>
        <small> Expenses </small>
      </CardHeader>

      <CardBody>
        <DataTable
          title={'Personal Expenses'}
          columns={columns}
          data={expenses}
          actions={<button className="btn btn-success btn-sm">Nuevo</button>}
          highlightOnHover={true}
          pagination={true}
          customTheme={rowTheme}
          progressPending={loading}
          progressShowTableHead
          ignoreRowClick={true}
        />
      </CardBody>
    </Card >
  );

}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default IndexComponent;