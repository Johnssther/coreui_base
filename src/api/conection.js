
/**
*Peticiones api
* @author John Alejandro || @Johnssther
* @link http://johnAlejandro.com
* link Api
* http://coysa.herokuapp.com/api/
*/


export const connection = () => {

    const host = window.location.host
    let URL = null;
    const API_TOKEN = localStorage.getItem('token');

    if (host === "localhost:3000") {
        URL = "http://localhost/coysa/public/api/";
    }
    if (host === "johnssther.github.io") {
        URL = "http://coysa.herokuapp.com/api/";
    }
    if (host === "http://159.65.226.161:3000") {
        URL = "http://localhost/coysa/public/api/";
    }

    return {
        URL: URL,
        API_TOKEN: API_TOKEN
    }
};
