import React, { useEffect, useState } from 'react';
import IndexComponent from '../components/index-component'

//redux
import { connect } from 'react-redux'

//services
import { indexRevenue } from '../../../../services/revenues/revenues'

function Index(props) {
  const { revenues } = props;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function anyNameFunction() {
      let loading = await indexRevenue();
      setLoading(!loading);

    }
    anyNameFunction()
  }, [])

  // add new register
  const onNew = () => {
    props.history.push('/budget/create')
  }

  return (
    <IndexComponent revenues={revenues} onNew={onNew} loading={loading}/>
  );
}

const mapStateToProps = state => ({
  revenues: state.revenues.indexrevenue,
})

export default connect(mapStateToProps)(Index)