//Llamadas al api
import API from '../../../../../api/api';
import { handleErrors } from '../../../../../utils/errors';


//redux
import { actions } from '../../../../../redux/actions/index';
import { store } from '../../../../../store';

//index
export const getExpenses = async () => {
    let data = {
        mes: null,
    }
    try {
        const expenses = await API.getExpenses(data);
        store.dispatch(actions.personalexpenses.setPersonalexpenses(expenses))
    } catch (e) {
        handleErrors(e)
    }
}

//store
export const createExpense = async (data) => {
    try {
        const createExpense = await API.saveExpenses(data);
        console.log(createExpense);
    } catch (e) {
        handleErrors(e)
    }
}

//show
export const showExpense = async (data) => {
    try {
        const showExpense = await API.showExpense(data);
        await store.dispatch(actions.personalexpenses.setPersonalexpense(showExpense))
    } catch (e) {
        handleErrors(e)
    }
}