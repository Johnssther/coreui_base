import React from 'react';

import Swal from 'sweetalert2'

import MainComponent from '../components/main-component'
//services

import { serviceIndexRevenues, serviceStoreRevenue } from '../../../../services/revenues/revenues'
//redux
import { connect } from 'react-redux'

function Create(props) {
  const { revenue } = props  

  const [success, setSuccess] = React.useState({success:false, error:null});
  const [count, setCount] = React.useState(1);

  const onCreate = async (values) => {
    try {
      let res = await serviceStoreRevenue(values) //save revenue api
      await serviceIndexRevenues()
      setCount(count+1); 
      if(parseInt(values.numeroregistros) === count) {
        // window.open(link, "_blank");
        props.history.push('/revenues')
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
    <MainComponent count={count} onCreate={onCreate} success={success} revenue={revenue}/>
    </>
  );
}

const mapStateToProps = state => ({
  revenue: state.revenues.storerevenue,
})

export default connect(mapStateToProps)(Create)