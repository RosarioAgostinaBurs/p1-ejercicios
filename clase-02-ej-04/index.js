
// Variables
let sexo, ciudad, edad;
let valorValido = true;

// Variables para edad mujeres y hombres
let contadorMujeres = 0; let contadorHombres = 0; 
let sumaEdadMujeres = 0; let sumaEdadHombres = 0;

// Variables para edad general
let contadorEdadTotal = 0; let sumaEdadTotal = 0;

// Mayores y menores a 21 años
let contadorMujeresMenores21 = 0; let contadorHombresMayores21 = 0;

// Maximos y minimos
let edadMax = 0; let edadMin = 110;

do {

        // Validación sexo
    do {

        sexo = prompt('Ingrese su sexo H, M, X');


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


    // Contadores y acumuladores para promedios y porcentajes
    contadorEdadTotal++;
    sumaEdadTotal += edad;

    if (sexo.toLowerCase() === "m") {
        contadorMujeres++;
        sumaEdadMujeres += edad;

        if(edad < 21) {
            contadorMujeresMenores21++;
        }

        if (edad > edadMax) {
            edadMax = edad;
        }

    } else if (sexo.toLowerCase() === "h") {
        contadorHombres++;
        sumaEdadHombres += edad;

            if(edad > 21) {
                contadorHombresMayores21++;
            }

        if (edad < edadMin) {
            edadMin = edad;
        }
    }



} while (confirm('¿Cargar otro dato?'));


document.write(`El promedio de edad general es: ${sumaEdadTotal / contadorEdadTotal}`);
document.write(`El promedio de edad de mujeres es: ${sumaEdadMujeres / contadorMujeres}`);
document.write(`El promedio de edad de hombres es: ${sumaEdadHombres / contadorHombres}`);

document.write(`La edad maxima de las mujeres es: ${edadMax}`);
document.write(`La edad minima de los hombres es: ${edadMin}`);

document.write(`Un ${100 * contadorHombresMayores21 / contadorEdadTotal}% son hombres mayores a 21 años`);
document.write(`Un ${100 * contadorMujeresMenores21 / contadorEdadTotal}% son mujeres menores a 21 años`);