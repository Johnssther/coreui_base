import { getExpensesTyped, saveExpenseType } from '../../api/typeexpense/typeexpense';

import { handleErrors } from '../../utils/errors';
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

export const getExpensesType = async () => {
    try {
        let expensestypes = await getExpensesTyped();
        store.dispatch(actions.expensestype.setExpensestype(expensestypes))
    } catch (e) {
        handleErrors(e)
    }
}

//store
export const createExpenseType = async (data) => {
    try {
        const createExpense = await saveExpenseType(data);
        console.log(createExpense);
    } catch (e) {
        handleErrors(e)
    }
}