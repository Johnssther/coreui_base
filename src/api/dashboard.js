/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/

import { generalErrorApi } from '../utils/errors';

class ApiDashboard {
    constructor() {
        let host = window.location.host
        if (host === "localhost:3000") {
            this.URL = "http://localhost/coysa/public/api/";
        }
        if (host === "johnssther.github.io") {
            this.URL = "http://coysa.herokuapp.com/api/";
        }
        if (host === "http://159.65.226.161:3000") {
            this.URL = "http://localhost/coysa/public/api/";
        }

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
    getTotalExpensesMonth() {
        return fetch(`${this.URL}dashboard/totalexpensesmonth?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}`)
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
