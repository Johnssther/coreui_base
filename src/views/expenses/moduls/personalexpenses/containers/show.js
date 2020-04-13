import React, { useEffect } from 'react';

//redux
import { connect } from 'react-redux'
//services
import { showExpense } from '../services/personalexpenses'
import ShowComponent from '../components/show-component'

function Show(props) {
    const { match, expense } = props
    const { params } = match

    useEffect(() => {
        // code to run on component mount
        showExpense(params)
    }, [])

    console.log(expense);
    return (
        <>
            <ShowComponent expense={expense} />
        </>
    );
}

const mapStateToProps = state => ({
    expensestype: state.expensestype.expensestype,
    expense: state.personalexpenses.personalexpense,
})

export default connect(mapStateToProps)(Show)