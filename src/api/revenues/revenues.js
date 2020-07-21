
import { connection } from '../conection';

class ApiRevenue {
    constructor() {
        this.URL = connection().URL;
        this.API_TOKEN = localStorage.getItem('token');
        this.USER = JSON.parse(localStorage.getItem('auth')).id;
    }

    //index
    index() {
        return fetch(`${this.URL}revenues?api_token=${this.API_TOKEN}&user_id=${this.USER}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }

    //store
    /* Expense */
    store(data) {
        // B. Guardar los gastos
        return fetch(`${this.URL}revenues`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: this.API_TOKEN,
                revenue_dt: data.revenue_dt,
                revenue_name: data.revenue_name,
                revenue_amount: data.revenue_amount,
                revenue_description: data.revenue_description,
                revenue_saving_percentaje: data.revenue_saving_percentaje,
                revenue_user: this.USER,
            }),

        }).then((response) => {
            return response.json();
        })
            .catch(error => {
                throw error;
            });
    }

    /* Expense */
    update(data) {
        console.log(data);

        // B. Guardar los revenues
        return fetch(`${this.URL}revenues/${data.id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: this.API_TOKEN,
                revenue_dt: data.revenue_dt,
                revenue_name: data.revenue_name,
                revenue_amount: data.revenue_amount,
                revenue_description: data.revenue_description,
                revenue_saving_percentaje: data.revenue_saving_percentaje,
                revenue_user: this.USER,
            }),

        }).then((response) => {
            return response.json();
        })
            .catch(error => {
                throw error;
            });
    }

    // 4. Show Expense
    show(id) {
        return fetch(`${this.URL}revenues/${id}?api_token=${this.API_TOKEN}&user_id=${this.USER}`)

            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }


    // 5. Elimina los gastos
    // gastos/85
    delete(id) {
        // B. Guardar los gastos
        return fetch(`${this.URL}revenues/${id}?api_token=${this.API_TOKEN}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })
            .catch(error => {
                throw error;
            });
    }




}
export default new ApiRevenue();
