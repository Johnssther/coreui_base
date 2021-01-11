import ApiRevenue from '../../api/revenues/revenues';
import { indexRevenues, storeRevenue, updateRevenue, showRevenue, destroyRevenue } from '../../api/revenues/revenues';

import { handleErrors, generalErrorApi } from '../../utils/errors';
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

/**
 * index
 */
export const serviceIndexRevenues = async () => {
    try {
        const revenues = await indexRevenues();
        store.dispatch(actions.revenues.setRevenueIndex(revenues))
        return true;
    } catch (e) {
        handleErrors(e)
    }
}

/**
 * store
 */
export const serviceStoreRevenue = async (data) => {
    try {
        const response = await storeRevenue(data);
        
        if(response.success === false) {
            generalErrorApi(response)
        } else {
            return response;
        }
    } catch (e) {
        handleErrors(e)
    }
}

/**
 * update
 */
export const serviceUpdateRevenue = async (data) => {
    try {
        const response = await updateRevenue(data);
        
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
export const serviceShowRevenue = async (data) => {
    try {
        const response = await showRevenue(data);
        console.log('show: ', response);
        // await store.dispatch(actions.personalexpenses.setPersonalexpense(showExpense))
        return true
    } catch (e) {
        handleErrors(e)
    }
}

//delete
export const serviceDeleteRevenue = async (data) => {
    try {
        const response = await destroyRevenue(data);
        console.log(response);
        return true
    } catch (e) {
        handleErrors(e)
    }
}