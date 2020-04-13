import React from 'react';

import MainComponent from '../components/main-component'
//services
import { getExpensesType, createExpenseType } from '../services/expensestype'
//redux
import { connect } from 'react-redux'

// getExpensesType();

function Create(props) {
    const { expensestype } = props

    const onCreate = async (values) => {
        try {
            Object.assign(values, { tipogastos_usuario: JSON.parse(localStorage.getItem('auth')).id })
            await createExpenseType(values) //save expense api
            console.log(values)
            await getExpensesType()
            props.history.push('/expenses/references/expensestype')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainComponent onCreate={onCreate} expensestype={expensestype} />
    );
}

const mapStateToProps = state => ({
    expensestype: state.expensestype.expensestype,
    createexpense: state.personalexpenses.personalexpense,
})

const mapDispatchToProps = dispatch => ({
    actions: {
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Create)