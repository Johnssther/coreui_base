//Llamadas al api
import API from '../../../../../api/api';

//redux
import { actions } from '../../../../../redux/actions/index';
import { store } from '../../../../../store';

export const getExpenses = async () => {
    let data = {
        mes: null,
    }

    try {
        const expenses =  await API.getExpenses(data);
        store.dispatch(actions.personalexpenses.setPersonalexpenses(expenses))
    } catch (e) {
        console.log('Ha ocurrido un error');    
        console.log(e);    
    }
}