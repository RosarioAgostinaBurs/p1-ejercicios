// Variable global para guardar el número validado que me de la funcion validacion
let numero1, numero2, sumar, restar, dividir, multiplicar;


function pedirNumero1() {
    numero1 = validarNumero('Ingrese el primer número');
}


function pedirNumero2() {
    numero2 = validarNumero('Ingrese el segundo número');
}

function suma() {
    sumar = numero1 + numero2;
}


function resta() {
    restar = numero1 - numero2;
}


function division() {
    dividir = numero1 / numero2;
}


function multiplicacion() {
    multiplicar = numero1 * numero2;
}


function resultado() {
    alert(`la suma de ${numero1} + ${numero2} es: ${sumar}`);
    alert(`la resta de ${numero1} - ${numero2} es: ${restar}`);
    alert(`la division de ${numero1} / ${numero2} es: ${dividir}`);
    alert(`la multiplicacion de ${numero1} * ${numero2} es: ${multiplicar}`);
}


function validarNumero(mensaje = "") {
    let numero;
    numero = parseInt(prompt(mensaje));

    do {
        if (isNaN(numero)) {
            alert('Solo se pueden ingresar números');
        }
    } while(isNaN(numero));

    return numero;
}