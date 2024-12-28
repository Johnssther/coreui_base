import API_REPORT from '../../api/reports/apiReport';
import { getGastosReport } from '../../api/reports/apiReport';

import { handleErrors, generalErrorApi } from '../../utils/errors';
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

//index
export const getRpersonalexpenses = async (data) => {
    try {
        const rpersonalexpenses = await getGastosReport(data)
        console.log(rpersonalexpenses);
        store.dispatch(actions.personalexpenses.setPersonalexpenses(rpersonalexpenses))
        return true;
    } catch (e) {
        handleErrors(e)
    }
}