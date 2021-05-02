
/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://johnalejandro.com
* link Api
* http://coysa.herokuapp.com/api/
*/

export const connection = () => {
    const host = window.location.host
    let URL = null;
    const API_TOKEN = localStorage.getItem('token');

    if (host === "localhost:3000") {
        URL = "http://localhost/coysa-laravel6/public/api/";
    }
    if (host === "johnssther.github.io") {
        URL = "http://coysa.herokuapp.com/api/";
    }
    if (host === "http://159.65.226.161:3000") {
        URL = "http://localhost/coysa-laravel6/public/api/";
    }

    return { URL, API_TOKEN }
};

export default {
    URL: connection().URL,
    API_TOKEN: connection().API_TOKEN,
    id:JSON.parse(localStorage.getItem('auth')).id
}