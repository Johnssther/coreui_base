import React, { useEffect } from 'react';

//redux
import { connect } from 'react-redux'
//services
import { showExpense } from '../../../../services/expenses/personalexpenses'
import ShowComponent from '../components/show-component'
import Loading from '../../../components/loading';

function Show(props) {
    const { match, expense } = props
    const { params } = match

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        // code to run on component mount
        async function anyNameFunction() {
            await showExpense(params)
            setLoading(false)
            
        }
        anyNameFunction()
    }, [])

    if( loading ) {
        return (
            <Loading />
        );   
    }
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