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

import Modals from '../../../components/Modals/Modals'
import ExpandableRowsComponent from './expandableRowsComponent'
import AddGastosForm from '../components/addGastosForm'

const rowTheme = {
    header: {
        borderColor: 'transparent',
    },
    rows: {
        //Propiedades de la tabla
        spacing: 'spaced',
        spacingBorderRadius: '50px',
        spacingMargin: '3px',

        borderColor: 'rgba(0,0,0,.12)',
        backgroundColor: 'white',
        height: '52px',
    },
    cells: {
        cellPadding: '48px',
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

    },
    {
        name: 'Cantidad',
        selector: 'cantidad',
        sortable: true,
    },
    {
        name: 'Gasto',
        selector: 'gasto',
        sortable: true,
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

// const ExpanableComponent = ({ data }) => <img src={data.image} />;


class DatatableShowGastos extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i><strong>Gastos diarios</strong>
                    <small> Gastos </small>
                </CardHeader>

                <CardBody>
                    <DataTable
                        title={this.props.title}
                        columns={columns}
                        data={this.props.gastos}
                        highlightOnHover={true}
                        actions={<Modals modal='toggleLarge' name='Nuevo' title="Ingresar nuevo gasto" cerrarmodal={this.props.cerrarmodal}> <AddGastosForm addExpense={this.props.addExpense} handleClick={this.props.handleClick} /> </Modals>}
                        pagination={true}
                        customTheme={rowTheme}
                        expandableRows
                        expandableRowsComponent={<ExpandableRowsComponent data={this.props.gastos} />}
                        expandOnRowClicked
                        progressPending={this.props.loading}
                        progressComponent={<LinearIndeterminate data={this.props.gastos} />}
                        progressShowTableHead
                        ignoreRowClick={true}
                    />
                </CardBody>
            </Card >
        );
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default DatatableShowGastos;