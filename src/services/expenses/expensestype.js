//Llamadas al api
import API from '../../api/typeexpense/api';
import { handleErrors } from '../../utils/errors';

//redux
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

export const getExpensesType = async () => {
    try {
        const expensestypes = await API.getExpensesType();
        store.dispatch(actions.expensestype.setExpensestype(expensestypes))
    } catch (e) {
        console.log('Ha ocurrido un error');
        console.log(e);
        handleErrors(e)
    }
}

//store
export const createExpenseType = async (data) => {
    try {
        const createExpense = await API.saveExpenseType(data);
        console.log(createExpense);
    } catch (e) {
        handleErrors(e)
    }
}