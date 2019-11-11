/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/


// import { generalError } from '../services/error'
// import { AsyncStorage } from 'react-native'

// const API_TOKEN = "AFF8tI4L4iK1i6exDkExHINKi3RqlrAg9f4sFzsuDwWL4mfMw7hsowmxSDiaCFhKmFpkpxnFgBhWef2V";





class Api {
    constructor() {
        this.URL = "http://coysa.herokuapp.com/api/";
        // this.URL = "http://localhost/coysa/public/api/";
        // this.API_TOKEN = "AFF8tI4L4iK1i6exDkExHINKi3RqlrAg9f4sFzsuDwWL4mfMw7hsowmxSDiaCFhKmFpkpxnFgBhWef2V";
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

    saveExpenses(data) {
        // B. Guardar los gastos
        fetch(`${this.URL}gastos`, {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: localStorage.getItem('token'),
                gasto: data.gasto,
                cantidad: data.cantidad,
                precio_unidad: data.precioUnidad,
                precio_total: data.precioTotal,
                fecha: data.Fecha,
                id_usuario: data.id_usuario
            }),

        }).then((response) => {
            return response.json();

        })
            .catch(error => {
                throw error;
            });
    }
    // 3. Obtener todos los gastos

    getExpenses() {
        return fetch(`${this.URL}gastos?api_token=${localStorage.getItem('token')}&id_usuario=${JSON.parse(localStorage.getItem('auth')).id}`)
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
export default new Api();
