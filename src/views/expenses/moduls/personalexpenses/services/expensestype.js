//Llamadas al api
import API from '../../../../../api/api';

//redux
import { actions } from '../../../../../redux/actions/index';
import { store } from '../../../../../store';

export const getExpensesType = async () => {
    try {
        const expensestypes =  await API.getExpensesType();
        store.dispatch(actions.expensestype.setExpensestype(expensestypes))
    } catch (e) {
        console.log('Ha ocurrido un error');
        console.log(e);    
    }
}