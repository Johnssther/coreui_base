import React from 'react';

import MainComponent from '../components/main-component'
//services
import { getExpensesType } from '../services/expensestype'
import { getExpenses, createExpense } from '../services/personalexpenses'
//redux
import { connect } from 'react-redux'
import { actions } from '../../../../../redux/actions/index'

getExpensesType();

function Create(props) {
  const { expensestypes } = props
  const expensestype = expensestypes.map((item) => {
    return { value: item.id, label: item.gasto }
  })
  const [success, setSuccess] = React.useState({success:false, error:null});


  const onCreate = async (values) => {
    try {
      if (values.precio_total === "") {
        let precio_total = values.cantidad * values.precio_unidad;
        Object.assign(values, { precio_total: precio_total })
      }
      Object.assign(values, { user_id: JSON.parse(localStorage.getItem('auth')).id })

      await createExpense(values) //save expense api
      await getExpenses()
      props.history.push('/expenses/moduls/personalexpenses')

    } catch (error) {
      Object.assign(error, { success: true })
      Object.assign(error, { error: error.errors })
      setSuccess(error)
    }
  }

  return (
    <MainComponent onCreate={onCreate} expensestype={expensestype} success={success}/>
  );
}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  createexpense: state.personalexpenses.personalexpense,
})

const mapDispatchToProps = dispatch => ({
  actions: {
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Create)