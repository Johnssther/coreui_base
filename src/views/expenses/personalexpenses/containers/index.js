import React, { useEffect, useState } from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
import { getExpenses } from '../../../../services/expenses/personalexpenses'

function Index(props) {
  const { expenses } = props;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function anyNameFunction() {
      let loading = await getExpenses();
      console.log(loading);
      setLoading(!loading);

    }
    anyNameFunction()
  }, [])

  // add new register
  const onNew = () => {
    props.history.push('/expenses/moduls/personalexpenses/create')
  }

  return (
    <IndexComponent expenses={expenses} onNew={onNew} loading={loading}/>
  );
}

const mapStateToProps = state => ({
  expenses: state.personalexpenses.personalexpenses,
})

export default connect(mapStateToProps)(Index)