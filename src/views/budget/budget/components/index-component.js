import React from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import LinearIndeterminate from '../../../components/linearIndeterminate'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import styled from 'styled-components';
import CardBudget from './component/cardbudget';

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

const columns = [

  {
    name: 'Revenue date',
    selector: 'revenue_dt',
    wrap: true,
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.revenue_dt}</div>{row.summary}</div>,
    grow: 1,
  },
  {
    name: 'Revenue name',
    selector: 'revenue_name',
    wrap: true,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Revenue amount',
    selector: 'revenue_amount',
    sortable: true,
    grow: 0,
  },
  {
    name: 'Revenue saving percentaje',
    selector: 'revenue_saving_percentaje',
    cell: row => <div><div style={{ fontWeight: 700, }}>{row.revenue_saving_percentaje}%</div>{row.summary}</div>,
    sortable: true,
  },
  {
    name: 'Revenue description',
    selector: 'revenue_description',
    wrap: true,
    sortable: true,
    grow: 4,
  },
  {
    cell: row => <></>,
    allowOverflow: true,
    button: true,
    width: '56px', // custom width for icon button
  },
];

function IndexComponent(props) {
  const { revenues, loading, onNew } = props;
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = revenues.filter(item => item.revenue_description && item.revenue_description.toLowerCase().includes(filterText.toLowerCase()));

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
        <i className="fa fa-align-justify"></i><strong>My Budget</strong>
        <small> Budgets </small>
      </CardHeader>
      <CardBody className="row">
        <div class="card m-1" style={{ width: '18rem' }}>
          <button style={{ height: '100%' }} className="btn btn-dark" onClick={() => { onNew() }} >Add</button>
        </div>
        <CardBudget className="m-1" mes="Enero 2020" onClick={() => onNew()} />
        <CardBudget className="m-1" mes="Febrero 2020" />
        <CardBudget className="m-1" mes="Marzo 2020" />
        <CardBudget className="m-1" mes="Abril 2020" />
        <CardBudget className="m-1" mes="Mayo 2020" />
        <CardBudget className="m-1" mes="Junio 2020" />
        <CardBudget className="m-1" mes="Julio 2020" />
        <CardBudget className="m-1" mes="Agosto 2020" />
        <CardBudget className="m-1" mes="Septiembre 2020" />
        <CardBudget className="m-1" mes="Octubre 2020" />
        <CardBudget className="m-1" mes="Noviembre 2020" />
        <CardBudget className="m-1" mes="Diciembre 2020" />
      </CardBody>
    </Card >
  );
}

export default IndexComponent;