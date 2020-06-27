/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/

import { generalErrorApi } from '../utils/errors';
import { connection } from './conection';

class ApiDashboard {
    constructor() {
        this.URL = connection().URL;
        this.API_TOKEN = localStorage.getItem('token');
    }
    
    getTotalExpensesMonths() {
        return fetch(`${this.URL}dashboard/totalexpensesmonths?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }
    getTotalExpensesMonth(data) {
        
        return fetch(`${this.URL}dashboard/totalexpensesmonth?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}&tipogasto=${data}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }


} // close class
//Total peticiones 2 : ??
export default new ApiDashboard();
