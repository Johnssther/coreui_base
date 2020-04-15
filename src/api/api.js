/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/

import { generalErrorApi } from '../utils/errors';

class Api {
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

    //1. Login
    onLogin(userLogin, passwordLogin) {
        return fetch(`${this.URL}login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userLogin,
                password: passwordLogin,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch(error => {
                throw error;
            });
    }
    //1. Register users
    registerUser(data) {
        return fetch(`${this.URL}register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password,
                password_confirmation: data.password_confirmation,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch(error => {
                throw error;
            });
    }




    /* Expense */
    saveExpenses(data) {
        console.log(data, 'joh');

        // B. Guardar los gastos
        return fetch(`${this.URL}gastos`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: this.API_TOKEN,
                gasto: data.gasto,
                cantidad: data.cantidad,
                precio_unidad: data.precio_unidad,
                precio_total: data.precio_total,
                fecha: data.fecha,
                user_id: data.user_id,
                tipogasto_id: data.tipogasto_id,
            }),

        }).then((response) => { 
            return response.json();
        })
        .catch(error => {
            throw error;
        });
    }
    // 3. Obtener todos los gastos

    getExpenses(data) {
        return fetch(`${this.URL}gastos?api_token=${this.API_TOKEN}
        &user_id=${JSON.parse(localStorage.getItem('auth')).id}
        &mes=${data.mes}`)

            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }

    // 4. Show Expense
    showExpense(data) {
        return fetch(`${this.URL}gastos/${data.id}?api_token=${this.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}`)

            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                throw error;
            });
    }

    // 4. Obtiene los tipos de gastos

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

    // 5. Elimina los gastos
    // gastos/85
    deleteExpense(id) {
        // B. Guardar los gastos
        return fetch(`${this.URL}gastos/${id}?api_token=${this.API_TOKEN}`, {
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


} // close class
//Total peticiones 2 : ??
export default new Api();
