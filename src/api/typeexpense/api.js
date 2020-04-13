import Api from '../api'

class ApiTypeExpense {
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

    //index
    getExpensesType() {
        return fetch(`${this.URL}tipogastos?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}`)
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
    saveExpenseType(data) {
        console.log(data, 'joh');

        // B. Guardar los gastos
        return fetch(`${this.URL}tipogastos`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: this.API_TOKEN,
                tipogastos_name: data.tipogastos_name,
                tipogastos_active: data.tipogastos_active,
                tipogastos_usuario: data.tipogastos_usuario,
            }),

        }).then((response) => {
            return response.json();
        })
            .catch(error => {
                throw error;
            });
    }




}
export default new ApiTypeExpense();
