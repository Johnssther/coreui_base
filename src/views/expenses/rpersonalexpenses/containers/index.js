import React, { useEffect, useState } from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
import { getExpenses } from '../../../../services/expenses/personalexpenses'
import { getExpensesType } from '../../../../services/expenses/expensestype'
import { getRpersonalexpenses } from '../../../../services/expenses/rpersonalexpense'

getExpensesType();

function Index(props) {
  const { expenses, expensestypes } = props;
  const [loading, setLoading] = useState(true);

  const expensestype = expensestypes.map((item) => {
    return { value: item.id, label: item.gasto }
  })

  useEffect(() => {
    async function anyNameFunction() {
      let loading = await getExpenses();
      setLoading(!loading);
    }
    anyNameFunction()
  }, [])

  // add new register
  const onNew = () => {
    props.history.push('/expenses/moduls/personalexpenses/create')
  }

  const onGet = (value) => {
    getRpersonalexpenses(value)
  }
  const onPrint = (value) => {
    getRpersonalexpenses(value)
  }

  return (
    <>
    <IndexComponent 
    expenses={expenses} 
    expensestype={expensestype} 
    onNew={onNew} 
    onGet={onGet} 
    onPrint={onPrint} 
    loading={loading} 
    />
    </>
  );
}

const mapStateToProps = state => ({
  expenses: state.personalexpenses.personalexpenses,
  expensestypes: state.expensestype.expensestype,

})

export default connect(mapStateToProps)(Index)