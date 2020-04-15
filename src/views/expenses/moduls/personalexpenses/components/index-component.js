import React from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import LinearIndeterminate from '../../../../components/linearIndeterminate'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

// DataTables
const rowTheme = {
  header: {
    borderColor: 'red',
    backgroundColor:'primary',
  },
  rows: {
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
    name: 'Actions',
    selector: 'id',
    sortable: true,
    cell: row => {
      return (
        <>
          <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Edit" className="text-primary cui-pencil m-1"></i></Link>
          <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Show" className="text-success icon-eye m-1"></i></Link>
          <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Delete" className="text-danger fa fa-eraser m-1"></i></Link>
        </>
      )
    },
    grow: 0,
  },
  {
    name: 'Date',
    selector: 'fecha',
    wrap: true,
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.fecha}</div>{row.summary}</div>,
    grow: 0,
  },
  {
    name: 'Expense type',
    selector: 'tipo_gasto',
    wrap: true,
    sortable: true,
    grow: 0,
  },
  {
    name: 'Count',
    selector: 'cantidad',
    sortable: true,
    grow: 0,
  },
  {
    name: 'Expense',
    selector: 'gasto',
    wrap: true,
    sortable: true,
    grow: 4,
  },
  {
    name: 'Unit price',
    selector: 'precio_unidad',
    sortable: true,
  },
  {
    name: 'Total price',
    selector: 'precio_total',
    sortable: true,
  },
  {
    cell: row => <></>,
    allowOverflow: true,
    button: true,
    width: '56px', // custom width for icon button
  },
];

function IndexComponent(props) {
  const { expenses, loading, onNew } = props;

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
          actions={<Button name="Add" onClick={onNew} ><i className="fa fa-plus m-1"></i>Add</Button>}
          highlightOnHover={true}
          pagination={true}
          customTheme={rowTheme}
          progressPending={loading}
          progressComponent={<LinearIndeterminate data={expenses} />}
          progressShowTableHead
          ignoreRowClick={true}
          theme="solarized"
        />
      </CardBody>
    </Card >
  );
}

export default IndexComponent;