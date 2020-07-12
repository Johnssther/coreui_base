import React from 'react';

//Componentes de terceros
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import LinearIndeterminate from '../../../components/linearIndeterminate'
import { Card, CardBody, CardHeader, Button, FormGroup, Label, Input, Row, Col, Modal, ModalBody } from 'reactstrap';
import Select from 'react-select'
import { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali'
import { setExpensestype } from '../../../../redux/actions/expensestype';
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

const columns = [
  {
    name: 'Actions',
    selector: 'id',
    sortable: true,
    cell: row => {
      return (
        <>
          {/* <Link to={`/expenses/moduls/personalexpenses/edit/${row.id}`}><i title="Edit" className="text-primary cui-pencil m-1"></i></Link> */}
          <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Show" className="text-success icon-eye m-1"></i></Link>
          {/* <Link to={`/expenses/moduls/personalexpenses/show/${row.id}`}><i title="Delete" className="text-danger fa fa-eraser m-1"></i></Link> */}
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
  const { expenses, expensestype, loading, onNew, onGet, onPrint } = props;
  const [toggle, setToggle] = React.useState(false);
  const [inputFecha, setInputFecha] = React.useState(moment());
  const [filterDate_in, setFilterDate_in] = React.useState(moment());
  const [filterDate_out, setFilterDate_out] = React.useState(moment());
  const [expensetype, setExpensetype] = React.useState('');
  const [inputType, setInputType] = React.useState('');
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

  // Toggle Modal
  const Toggle = (value) => {
    setInputType(value);
    setToggle(!toggle);
  }
  const onChangeCalendar = (value) => {
    if (inputType === "filterDate_in") {
      setFilterDate_in((value));
    }
    if (inputType === "filterDate_out") {
      setFilterDate_out((value));
    }
    setInputFecha(value);
    Toggle()
  }
  const onChangeSelect = (value) => {
    setExpensetype((value));
  }

  const _onGet = (value) => {
    let data = {
      filterDate_in: filterDate_in.format('YYYY/M/D'),
      filterDate_out: filterDate_out.format('YYYY/M/D'),
      filterTipogasto: expensetype,
      type: 'get',
    }
    onGet(data);
  }
  const _onPrint = (value) => {
    let data = {
      filterDate_in: filterDate_in.format('YYYY/M/D'),
      filterDate_out: filterDate_out.format('YYYY/M/D'),
      filterTipogasto: expensetype,
      type: 'print',
    }
    onPrint(data);
  }

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={toggle}
        toggle={() => { Toggle() }}
        fade={false}
      >
        <ModalBody
        >
          <Calendar
            style={{ backgroundColor: 'red' }}
            onChange={inputFecha => { onChangeCalendar(inputFecha) }}
            value={inputFecha}
          />
        </ModalBody>
      </Modal>

      <Card>
        <CardBody>
          <div className="row">
            <div className="col-sm">
              <FormGroup>
                <Label htmlFor="filterDate_in">Initial Date</Label>
                <Input value={filterDate_in.format('YYYY/M/D')} onClick={() => { Toggle('filterDate_in') }} placeholder='Fecha de inicio' type="texty" id="filterDate_in" name="filterDate_in" />
              </FormGroup>
            </div>
            <div className="col-sm">
              <FormGroup>
                <Label htmlFor="filterDate_out">Final Date</Label>
                <Input value={filterDate_out.format('YYYY/M/D')} onClick={() => { Toggle('filterDate_out') }} placeholder='Fecha Fin' type="text" id="filterDate_out" name="filterDate_out" />
              </FormGroup>
            </div>
            <div className="col-sm">
              <FormGroup>
                <Label htmlFor="inputTipogasto">Type Expense</Label>
                <Select options={expensestype}
                  onChange={(newValue) => { onChangeSelect(newValue.value) }}
                />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <hr></hr>
              <Row>
                <Col sm={{ size: 6, offset: 4 }}>
                  <Button onClick={() => { _onGet() }} className="col-sm-3 m-1" type="reset" color="success" size="sm">Mostrar</Button>
                  <Button onClick={() => { _onPrint() }} className="col-sm-3 m-1" type="submit" color="danger" size="sm">Imprimir</Button>
                </Col>
              </Row>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>Daily Expenses</strong>
          <small> Expenses </small>
        </CardHeader>

        <CardBody>
          <DataTable
            title={'Report Personal Expenses'}
            columns={columns}
            data={filteredItems}
            actions={<Button name="Add" onClick={onNew} ><i className="fa fa-plus m-1"></i>Add</Button>}
            highlightOnHover={true}
            pagination={true}
            customTheme={rowTheme}
            progressPending={loading}
            progressComponent={<LinearIndeterminate data={filteredItems} />}
            progressShowTableHead
            ignoreRowClick={true}
            theme="solarized"
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
          />
        </CardBody>
      </Card >
    </>
  );
}

export default IndexComponent;