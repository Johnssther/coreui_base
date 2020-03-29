import  React from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
import { getExpenses } from '../services/personalexpenses'

getExpenses();

function Index(props) {
  const { expenses } = props;
  return (
    <IndexComponent expenses={expenses}/>
  );
}

const mapStateToProps = state => ({
  expenses: state.personalexpenses.personalexpenses,
})

export default connect(mapStateToProps)(Index)