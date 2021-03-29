const checkError = (data) => {

    for (let element in data) {





        switch (element) {

            case 'name':
                
                if (! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(data[element])) {

                    return " nombre solo puede contener letras ";
                }
                break;

            case 'surname':
                if (! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(data[element])) {

                    return " Apellidos solo pueden contener letras  ";

                }

            break;

            case 'username':
                if (! /^(?=.{6,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(data[element])) {
                    return 'min 6 caracteres ,solo acepta - y _'
                }
            break;

            case 'email':
                if (! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(data[element])) {

                    return 'Por favor escriba un email válido.'
                } 
            break;

            case 'password':
                if (data[element] === '') {
                    return 'Por favor escriba su contraseña.';
                }
            break;

            case 'passwordTwo': 
                if (data.passwordOne !== data.passwordTwo) {
                    return 'Las contraseñas deben ser iguales'
                }
            break;

            case 'phone' : 

                // eslint-disable-next-line
                if(! /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}.text(data[element])/){

                    return "El telefono introducido solo puede contener números";
                }
            break;

            case 'address':
                if (! /^[#.0-9a-zA-Z\s,-\\ñÑ]+$/.test(data[element])) {
                    return 'caracteres especiales :solos se permiten  "-" ; "." ;"," '
                } 
            break;

            default:
            
            break;
        }
    }
};

export default checkError;

