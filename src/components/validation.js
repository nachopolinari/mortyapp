export default (data) => {
    let errors = {};

    

    if (!data.email.includes('@')) {
        errors.email1 = 'Email is not valid';
    }
        /*si lo que viene por data.email no incluye lo q la regex pide, muestra error.email
        el nombre de usuario tiene que ser un email*/
    
    if (!data.email) {
        errors.email2 = 'Enter Email';
        /*el nombre de usuario no puede estar vacío.
        NO ESTA FUNCIONANDO EL ERROR 2- REVISAR */
    }
    if (data.email.length > 35) {
        errors.email3 = 'Email cannot be longer than 35 characters';
        /*el nombre de usuario no puede tener más de 35 caracteres. */
    }

    // if (!data.password.includes(^ (?=\w *\d)(?=\w * [A - Z])(?=\w * [a - z]) \S{ 8, 16 }$)) {
    //     error.password='La contraseña debe tener 8-16 caracteres, al menos un digito,al menos una minuscula y una mayuscula'

    //     /*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.NO puede tener otros símbolos.*/
    // }

    if (!/\d/.test(data.password)) {
        errors.password1 = 'The password must have at least one number'
    }

    if (data.password.length < 6 || data.password.length > 10) {
        errors.password2 = 'The password must have between 6 and 10 characters'
    }

return errors;
};