//Llamadas al api
import API_REPORT from '../../api/reports/apiReport';
import { handleErrors, generalErrorApi } from '../../utils/errors';


//redux
import { actions } from '../../redux/actions/index';
import { store } from '../../store';

//index
export const getRpersonalexpenses = async (data) => {
    // let data = {
    //     filterDate_in: "2020/6/1",
    //     filterDate_out: "2020/6/20",
    //     filterTipogasto: "",
    // }
    try {
        const rpersonalexpenses = await API_REPORT.getGastosReport(data)
        console.log(rpersonalexpenses);
        store.dispatch(actions.personalexpenses.setPersonalexpenses(rpersonalexpenses))
        return true;
    } catch (e) {
        handleErrors(e)
    }
}