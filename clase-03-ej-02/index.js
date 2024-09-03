// Variables globales
let numero1, numero2, suma;

/**
 * Funcion que atiende el click para pedir el primer número
 */
function pedirNumero1() {
    // Copio en la variable global el numero validado
    numero1 = validarNumero('Ingrese el primer número');
}

/**
 * Funcion que atiende el click para pedir el segundo número
 */
function pedirNumero2() {
    // Copio en la variable global en numero validado
    numero2 = validarNumero('Ingrese el segundo número');
}


/**
 * Funcion que suma los dos números pedidos
 */
function sumar() {
    suma = numero1 + numero2;
}


/**
 * Funcion que muestra el resultado de la suma
 */
function resultado() {
    alert(`la suma de ${numero1} + ${numero2} es: ${suma}`);
}


/**
 * Funcion encargada de pedir y validar un número
 * @param {String} mensaje mensaje que aparece en el prompt
 * @returns número validado
 */
function validarNumero(mensaje = "") {
    // Variable local para validar
    let numero;
    numero = parseInt(prompt(mensaje));

    do {
        if (isNaN(numero)) {
            alert('Solo se pueden ingresar numeros');
        }
    } while(isNaN(numero));

    // Retorno el numero ya validado a quien lo llamo
    return numero;


    // Este alert nunca va a aparecer porque se corta la funcion en seco en el return
    alert('Hola');
}