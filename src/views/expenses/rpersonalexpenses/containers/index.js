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
    <a href="http://localhost/coysa/public/api/gastosreport?api_token=AFF8tI4L4iK1i6exDkExHINKi3RqlrAg9f4sFzsuDwWL4mfMw7hsowmxSDiaCFhKmFpkpxnFgBhWef2V&user_id=1&&filterDate_in=2019-11-12&&filterDate_out=2019-11-12&&filterTipogasto=4">link</a>
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