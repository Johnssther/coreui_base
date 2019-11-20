import React, { Component } from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import Select from 'react-select'
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Modal, ModalBody, ModalFooter, ModalHeader,
    Input,
    Label,
    Row,
    Col,
    Badge,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Spinner
} from 'reactstrap';

import Modals from '../../../components/Modals/Modals'

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
        cell: row => <button>eliminar</button>,
        allowOverflow: true,
        button: true,
        width: '56px', // custom width for icon button
    },
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
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const LinearIndeterminate = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color="secondary"  />
        </div>
    );
};

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
                        // actions={<Modals modal='toggle' name='New' />}
                        actions={<Button key="add" onClick={this.props.handleClick}>Nuevo</Button>}
                        pagination={true}
                        customTheme={rowTheme}
                        expandableRows
                        expandableRowsComponent={<div>Detalle de los gastos</div>}
                        expandOnRowClicked
                        progressPending={this.props.loading}
                        progressComponent={<LinearIndeterminate />}
                        progressShowTableHead
                    />
                </CardBody>
            </Card >
        );
    }

}

export default DatatableShowGastos;