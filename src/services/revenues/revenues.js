//Llamadas al api
import ApiRevenue from '../../api/revenues/revenues';
import { handleErrors, generalErrorApi } from '../../utils/errors';

//redux
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

//index
export const indexRevenue = async () => {
    try {
        const revenues = await ApiRevenue.index();
        store.dispatch(actions.revenues.setRevenueIndex(revenues))
        return true;
    } catch (e) {
        handleErrors(e)
    }
}

//store
export const storeRevenue = async (data) => {
    try {
        const response = await ApiRevenue.store(data);
        
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
export const updateRevenue = async (data) => {
    try {
        const response = await ApiRevenue.update(data);
        
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
export const showRevenue = async (data) => {
    try {
        const response = await ApiRevenue.show(data);
        console.log('show: ', response);
        // await store.dispatch(actions.personalexpenses.setPersonalexpense(showExpense))
        return true
    } catch (e) {
        handleErrors(e)
    }
}

//delete
export const deleteRevenue = async (data) => {
    try {
        const response = await ApiRevenue.delete(data);
        console.log(response);
        return true
    } catch (e) {
        handleErrors(e)
    }
}