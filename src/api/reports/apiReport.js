// http://localhost/coysa/public/api/gastosreport?user_id=1&&filterDate_in=2019-11-12&&filterDate_out=2019-11-12
/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/
class ApiReport {
    constructor() {
        let host = window.location.host
        if (host === "localhost:3000") {
            this.URL = "http://localhost/coysa/public/api/";
        }
        if (host === "johnssther.github.io") {
            this.URL = "http://coysa.herokuapp.com/api/";
        }
        this.API_TOKEN = localStorage.getItem('token');
    }
     // 3. Obtener todos los gastos
     getGastosReport(data) {
         console.log(data);
         
        return fetch(`${this.URL}gastosreport?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}&filterDate_in=${data.filterDate_in}&filterDate_out=${data.filterDate_out}&filterTipogasto=${data.filterTipogasto}`)
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
export default new ApiReport();
