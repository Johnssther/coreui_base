import React from 'react';

import Swal from 'sweetalert2'

import MainComponent from '../components/main-component'
//services
import { getExpensesType } from '../../../../services/expenses/expensestype'
import { getExpenses, createExpense } from '../../../../services/expenses/personalexpenses'
//redux
import { connect } from 'react-redux'

getExpensesType();

function Create(props) {
  const { expensestypes, expense } = props  

  const expensestype = expensestypes.map((item) => {
    return { value: item.id, label: item.gasto }
  })
  const [success, setSuccess] = React.useState({success:false, error:null});
  const [count, setCount] = React.useState(1);

  const onCreate = async (values) => {
    try {
      if (values.precio_total === "") {
        let precio_total = values.cantidad * values.precio_unidad;
        Object.assign(values, { precio_total: precio_total })
      }
      Object.assign(values, { user_id: JSON.parse(localStorage.getItem('auth')).id })

      let res = await createExpense(values) //save expense api
      await getExpenses()
      setCount(count+1); 
      if(parseInt(values.numeroregistros) === count) {
        // window.open(link, "_blank");
        props.history.push('/expenses/moduls/personalexpenses')
      } else {
        if(res.success === true) {
          Swal.fire({
            title: 'Success!',
            text: res.gasto,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      }

    } catch (error) {
      Object.assign(error, { success: true })
      Object.assign(error, { error: error.errors })
      console.log(error);
      
      Swal.fire({
        title: 'Error!',
        text: error.error,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
     // setSuccess(error)
    }
  }

  return (
    <>
      <MainComponent count={count} onCreate={onCreate} expensestype={expensestype} success={success} expense={expense}/>
    </>
  );
}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.createpersonalexpense,
})

export default connect(mapStateToProps)(Create)