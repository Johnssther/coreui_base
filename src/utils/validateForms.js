/**
*Metodos validate forms
* @author John Alejandro || @Johnssther
* @link http://JohnAlejandro.com
* 
*/
class ValidateForms {

    formRegisterUsers(event) {
        let key = event.target.name
        switch (key) {
            case 'name':
                if (event.target.value.length < 12) {
                    let name_error = `El nombre debe tener minimo ${event.target.value.length} caracteres`
                    return name_error
                } else {
                    return ``
                }
                break;
            case 'Martes':
                console.log('martesss...');
                break;
            default:
                break;
        }
    }
}
export default new ValidateForms();
