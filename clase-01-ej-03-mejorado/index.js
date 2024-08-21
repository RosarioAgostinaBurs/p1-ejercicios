// Guardo las notas
let notas;

// Variables para guardar la cantidad de aprobados, desaprobados y promocionados
let contadorAprobados = 0; let contadorDesaprobados = 0; let contadorPromocionados = 0;

// Variables para guardar el total de cada suma de aprobados, desaprobados y promocionados
let sumaAprobados = 0; let sumaDesaprobados = 0; let sumaPromocionados = 0;

// Variables para ver la nota minima y la nota maxima
let notaMin = 11; let notaMax = 0;

do {
    // Pido las notas
    notas = +prompt('Ingrese su nota');

    // Pregunto si desaprobaron
    if (notas < 4) {
        // Si desaprobo sumo 1 al contador (cantidad desaprobados)
        // y sumo la nota a la sumatoria total de las notas de los desaprobados
        contadorDesaprobados++;
        sumaDesaprobados += notas;

    // Si entra aca es porque su nota es mayor o igual a 4, por ende aprobo
    } else {
        contadorAprobados++;
        sumaAprobados += notas;
        // Si aprobo sumo 1 al contador (cantidad aprobados)
        // y sumo la nota a la sumatoria total de las notas de los aprobados

        // Si entro a else es porque aprobo, ahora quiero ver si su nota es mayor o igual a 7, osea promocionado
        if (notas >= 7) {
            contadorPromocionados++;
            sumaPromocionados += notas;
        }
    }

    // Pregunto si la nota ingresada es menor a la nota mas alta posible
    if (notas > notaMax) {
        notaMax = notas;
    }

    // Pregunto si la nota ingresada es mayor a la nota mas baja posbile
    if (notas < notaMin) {
        notaMin = notas;
    }

} while (confirm('¿Quiere ingresar otra nota?'));

// Muestro el total de aprobados, desaporbados y promocionados, y luego muestro el promedio de cada categoria
// Dividiendo la suma de las notas de los aprobados con la cantidad que hayan aprobado(contador)
alert(`cantidad aprobados: ${contadorAprobados} y el promedio fue de ${sumaAprobados / contadorAprobados}
        cantidad desaprobados: ${contadorDesaprobados} y el promedio fue de ${sumaDesaprobados / contadorDesaprobados}
        cantidad promocionados: ${contadorPromocionados} y el promedio fue de ${sumaPromocionados / contadorPromocionados}`);

// Muestro la nota minima ingresada y la nota maxima
alert(`La nota minima fue ${notaMin}
    y la nota maxima fue: ${notaMax}`);