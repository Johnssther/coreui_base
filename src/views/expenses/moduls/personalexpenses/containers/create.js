import  React from 'react';

import MainComponent from '../components/main-component'
//services
import { getExpenses } from '../services/personalexpenses'

getExpenses();

function Create() {
    const onCreate = (values) => {
        console.log(values);
    }

  return (
    <MainComponent onCreate={onCreate}/>
  );
}

export default Create