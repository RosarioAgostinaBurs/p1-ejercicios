/**
 * Funcion que valida un string
 * @param {String} mensaje mensaje que se utiliza para el prompt
 * @returns el string validado
 */
function validarString(mensaje = "") {

    // Variable para validar el dato
    let datoValido = true;
    // Variable auxiliar
    let foo;

    do {

        foo = prompt(mensaje);

        if (foo === null) {
            alert('Por favor complete el campo');
            datoValido = false;
        } 
        else if (foo.trim() === "") {
            alert('Por favor, no deje el campo vacio');
            datoValido = false;
        } 
        else if (!isNaN(foo)) {
            alert('Ingrese texto, no números');
            datoValido = false;
        } 
        else {
            datoValido = true;
        }

    } while(!datoValido);

    return foo;

}


/**
 * Funcion que valida una nota numerica
 * @param {String} mensaje Mensaje que se utiliza para el prompt
 * @returns una nota numerica validada
 */
function validarNumero(mensaje = "") {
    // Variable para validar el dato
    let datoValido = true;
    // Variable auxiliar
    let foo;

    do {

        foo = parseInt(prompt(mensaje));

        if (isNaN(foo)) {
            alert('Escirba unicamente números');
            datoValido = false;
        }
        else if (foo < 4 || foo > 10) {
            alert('La nota debe estar entre 4 y 10');
            datoValido = false;
        } 
        else {
            datoValido = true;
        }

    } while(!datoValido);

    return foo;

}