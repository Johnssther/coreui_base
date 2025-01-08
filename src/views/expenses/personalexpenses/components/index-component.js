import React from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import LinearIndeterminate from '../../../components/linearIndeterminate'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import styled from 'styled-components';

// DataTables
const rowTheme = {
  header: {
    borderColor: 'red',
    backgroundColor: 'primary',
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
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField id="search" type="text" placeholder="Browser Expense" value={filterText} onChange={onFilter} />
    <ClearButton type="button" onClick={onClear}>X</ClearButton>
  </>
);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

const columns = [
  {
    name: 'Actions',
    selector: 'id',
    sortable: true,
    cell: row => {
      return (
        <>
          {/* <Link to={`/expenses/moduls/personalexpenses/edit/${row.id}`}><i title="Edit" className="text-primary cui-pencil m-1"></i></Link> */}
          <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Show" className="text-success fa fa-eye m-1"></i></Link>
          {
            row.urlfile === null ? null:
            <a href={row.urlfile} target="_blank"><i title="File" className="text-success fa fa-file m-1"></i></a>
          }
          {/* <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Delete" className="text-danger fa fa-eraser m-1"></i></Link> */}
        </>
      )
    },
    grow: 0,
  },
  {
    name: 'Unids',
    selector: 'cantidad',
    sortable: true,
    grow: 0.5,
  },
  {
    cell: row => <span style={{ fontWeight: 'bold' }}>{row.gasto}</span>,
    name: 'Expense',
    selector: 'gasto',
    wrap: true,
    sortable: true,
    grow: 4,
  },
  {
    cell: row => <span>{formatCurrency(row.precio_unidad)}</span>,
    name: 'Unit price',
    selector: 'precio_unidad',
    sortable: true,
  },
  {
    cell: row => <span>{formatCurrency(row.precio_total)}</span>,
    name: 'Total price',
    selector: 'precio_total',
    sortable: true,
  },
  {
    name: 'Expense type',
    selector: 'tipo_gasto',
    wrap: true,
    sortable: true,
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
    cell: row => <></>,
    allowOverflow: true,
    button: true,
    width: '56px', // custom width for icon button
  },
];

function IndexComponent(props) {
  const { expenses, loading, onNew } = props;
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const filteredItems = expenses.filter(item => item.gasto && item.gasto.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  console.log(loading);

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
          data={filteredItems}
          actions={<Button name="Add" onClick={onNew} ><i className="fa fa-plus m-1"></i>Add</Button>}
          highlightOnHover={true}
          pagination={true}
          customTheme={rowTheme}
          progressPending={loading}
          progressComponent={<LinearIndeterminate data={expenses} />}
          progressShowTableHead
          ignoreRowClick={true}
          theme="solarized"
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
      </CardBody>
    </Card >
  );
}

export default IndexComponent;