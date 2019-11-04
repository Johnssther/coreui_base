/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* link Api
* http://104.236.57.82/accesspark/public/api/login
*/


// import { generalError } from '../services/error'
// import { AsyncStorage } from 'react-native'

// const URL = "http://104.236.57.82/accesspark/public/api/";




class Api {
    constructor() {
        URL = "http://localhost/coysa/public/api/";
    }


    //1. Login


    saveExpenses(data) {
        // B. Guardar los gastos
        fetch(`${URL}gastos`, {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gasto: data.gasto,
                cantidad: data.cantidad,
                precio_unidad: data.precioUnidad,
                precio_total: data.precioTotal,
                fecha: data.Fecha,
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
        return fetch(`${URL}gastos`)
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
