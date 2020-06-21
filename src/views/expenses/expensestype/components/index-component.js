import React from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import LinearIndeterminate from '../../../components/linearIndeterminate'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

// DataTables
const rowTheme = {
  header: {
    borderColor: 'red',
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
    name: 'Code',
    selector: 'id',
    sortable: true,
    cell: row => <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}>{row.id}</Link>,
    grow: 0,
  },
  {
    name: 'Expense',
    selector: 'gasto',
    wrap: true,
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
  const { expensestypes, loading, onNew } = props;

  return (
    <Card>
      <CardHeader>
        <i className="fa fa-align-justify"></i><strong>Daily Expenses</strong>
        <small> Type Expenses </small>
      </CardHeader>
      <CardBody>
        <DataTable
          title={'Personal Expenses'}
          columns={columns}
          data={expensestypes}
          actions={<Button name="Add" onClick={onNew} ><i className="fa fa-plus m-1"></i>Add</Button>}
          highlightOnHover={true}
          pagination={true}
          customTheme={rowTheme}
          progressPending={loading}
          progressComponent={<LinearIndeterminate data={expensestypes} />}
          progressShowTableHead
          ignoreRowClick={true}
          theme="solarized"
        />
      </CardBody>
    </Card >
  );
}

export default IndexComponent;