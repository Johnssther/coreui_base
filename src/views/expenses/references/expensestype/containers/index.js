import React from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
// import { getExpenses } from '../services/personalexpenses'
import { getExpensesType } from '../services/expensestype'
getExpensesType();

function Index(props) {
  const { expenses, expensestypes } = props;
  // add new register
  const onNew = () => {
    props.history.push('/expenses/references/expensestype/create')
  }

  return (
    <IndexComponent expenses={expenses} expensestypes={expensestypes} onNew={onNew} />
  );
}

const mapStateToProps = state => ({
  expenses: state.personalexpenses.personalexpenses,
  expensestypes: state.expensestype.expensestype,
})

export default connect(mapStateToProps)(Index)