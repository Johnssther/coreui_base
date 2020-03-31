import  React from 'react';

import MainComponent from '../components/main-component'
//services
import { getExpensesType } from '../services/expensestype'
//redux
import { connect } from 'react-redux'

getExpensesType();

function Create(props) {
  const { expensestype } = props
    const onCreate = (values) => {
        console.log(values);
    }

  return (
    <MainComponent onCreate={onCreate} expensestype={expensestype}/>
  );
}

const mapStateToProps = state => ({
  expensestype: state.expensestype.expensestype,
})

export default connect(mapStateToProps)(Create)