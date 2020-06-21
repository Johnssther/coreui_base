//Llamadas al api
import API from '../../api/api';
import { handleErrors, generalErrorApi } from '../../utils/errors';

//redux
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

//index
export const getExpenses = async () => {
    let data = {
        mes: null,
    }
    try {
        const expenses = await API.getExpenses(data);
        store.dispatch(actions.personalexpenses.setPersonalexpenses(expenses))
        return true;
    } catch (e) {
        handleErrors(e)
    }
}

//store
export const createExpense = async (data) => {
    try {
        const response = await API.saveExpenses(data);
        
        if(response.success === false) {
            generalErrorApi(response)
        } else {
            return response;
        }
    } catch (e) {
        handleErrors(e)
    }
}
//update
export const updateExpense = async (data) => {
    try {
        const response = await API.updateExpense(data);
        
        if(response.success === false) {
            generalErrorApi(response)
        } else {
            return response;
        }
    } catch (e) {
        handleErrors(e)
    }
}

//show
export const showExpense = async (data) => {
    try {
        const showExpense = await API.showExpense(data);
        await store.dispatch(actions.personalexpenses.setPersonalexpense(showExpense))
        return true
    } catch (e) {
        handleErrors(e)
    }
}