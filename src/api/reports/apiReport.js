
import { connection } from '../conection';

class ApiReport {
    constructor() {
        this.URL = connection().URL;
        this.API_TOKEN = localStorage.getItem('token');
    }

    // 3. Obtener todos los gastos
    getGastosReport(data) {
        console.log(data);
        
        let link = `${this.URL}gastosreport?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}&filterDate_in=${data.filterDate_in}&filterDate_out=${data.filterDate_out}&filterTipogasto=${data.filterTipogasto}&type=${data.type}`;
        if (data.type === 'print') {
            window.open(link);
        }
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
