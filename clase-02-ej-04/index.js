// Variables
let sexo, ciudad, edad;
let valorValido = true;


// Validación sexo
do {

    // Pido dato
    sexo = prompt('Ingrese su sexo H, M, X');


    // Valido sexo
    if (sexo === null) {
        alert('Ingrese H, M, X (no cancelar)');
        valorValido = false;

    } else if (sexo.trim() === "") {
        alert('Ingrese H, M, X (no aceptar)');
        valorValido = false;

    } else if (!isNaN(sexo)) {
        alert('Ingrese H, M, X (no número)');
        valorValido = false; 

    } else if (sexo.toLowerCase() !== 'h' && sexo.toLowerCase() !== 'm' && sexo.toLowerCase() !== 'x') {
        alert('Ingrese una opcion valida M, H, X');
        valorValido = false;

    } else {
        valorValido = true;
    }
    
} while (!valorValido);



// Validacion ciudad
do {

    ciudad = prompt('Ingrese una ciudad')

    if (ciudad === null) {
        alert('Ingrese una ciudad no cancel');
        valorValido = false;

    } else if (ciudad.trim() === "") {
        alert('Ingrese una ciudad, no aceptar');
        valorValido = false;

    } else if (!isNaN(ciudad)) {
        alert('Ingrese una ciudad no un numero');
        valorValido = false;

    } else {
        valorValido = true;
    }

} while (!valorValido);




// Validacion edad
do {

    edad = parseInt(prompt('Ingrese su edad 0 - 110'));


    if (isNaN(edad)) {
        alert('Ingrese una edad numerica');
        valorValido = false;

    } else if (edad < 0) {
        alert('Ingrese una edad mayor que 0');
        valorValido = false;

    } else if (edad > 110) {
        alert('Ingrese una edad menor a 110 años');
        valorValido = false;

    } else {
        valorValido = true;
    }



} while (!valorValido);