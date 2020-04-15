import React, { useEffect } from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
import { getExpenses } from '../services/personalexpenses'


function Index(props) {
  const { expenses } = props;
  
  useEffect(()=>{
    getExpenses();
  },[])

  // add new register
  const onNew = () => {
    props.history.push('/expenses/moduls/personalexpenses/create')
  }

  return (
    <IndexComponent expenses={expenses} onNew={onNew} />
  );
}

const mapStateToProps = state => ({
  expenses: state.personalexpenses.personalexpenses,
})

export default connect(mapStateToProps)(Index)