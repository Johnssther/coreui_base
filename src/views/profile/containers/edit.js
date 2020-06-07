import React from 'react';

import MainComponent from '../components/main-component'
//services

//redux
import { connect } from 'react-redux'

function Edit(props) {
  const { match, expensestypes, expense } = props
  const { params } = match

  const [success, setSuccess] = React.useState({ success: false, error: null });
  
  const onCreate = async (values) => {
    try {
      Object.assign(values, { user_id: JSON.parse(localStorage.getItem('auth')).id })
      props.history.push('/profile')

    } catch (error) {
      Object.assign(error, { success: true })
      Object.assign(error, { error: error.errors })
      setSuccess(error)
    }
  }

  return (
    <MainComponent onCreate={onCreate} success={success} />
  );
}

export default Edit