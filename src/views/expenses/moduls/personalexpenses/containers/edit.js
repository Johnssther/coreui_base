import React from 'react';

import MainComponent from '../components/main-component'
//services
import { getExpensesType } from '../services/expensestype'
import { getExpenses, updateExpense, showExpense } from '../services/personalexpenses'
//redux
import { connect } from 'react-redux'

getExpensesType();

function Edit(props) {
  const { match, expensestypes, expense } = props
  const { params } = match

  const expensestype = expensestypes.map((item) => {
    return { value: item.id, label: item.gasto }
  })
  const [success, setSuccess] = React.useState({ success: false, error: null });
  React.useEffect(() => {
    showExpense(params)
    // code to run on component mount
  }, [])

  const onCreate = async (values) => {
    try {
      if (values.precio_total === "") {
        let precio_total = values.cantidad * values.precio_unidad;
        Object.assign(values, { precio_total: precio_total })
      }
      Object.assign(values, { user_id: JSON.parse(localStorage.getItem('auth')).id })

      await updateExpense(values) //save expense api
      await getExpenses()
      props.history.push('/expenses/moduls/personalexpenses')

    } catch (error) {
      Object.assign(error, { success: true })
      Object.assign(error, { error: error.errors })
      setSuccess(error)
    }
  }

  return (
    <MainComponent onCreate={onCreate} expensestype={expensestype} success={success} expense={expense} />
  );
}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.personalexpense,
})

export default connect(mapStateToProps)(Edit)