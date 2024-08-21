let nota;
let cantidadAprobados = 0;
let cantidadDesaprobados = 0;
let cantidadPromocionados = 0;
let sumaDesaprobados = 0;
let sumaAprobados = 0;
let sumaPromocionados = 0;
let notaMinima = Infinity;
let notaMaxima = -Infinity;

do {
    nota = +prompt('ingrese su nota:');

    if (nota < 4) {
        cantidadDesaprobados++;
        sumaDesaprobados += nota;
    } else if (nota > 7) {
        cantidadPromocionados++;
        cantidadAprobados++;
        sumaAprobados += nota;
        sumaPromocionados += nota;
    } else if (nota >= 4) {
        cantidadAprobados++;
        sumaAprobados += nota;
    }

    if (nota < notaMinima) {
        notaMinima = nota;
    }
    
    if (nota > notaMaxima) {
        notaMaxima = nota;
    }

} while (confirm('¿Quiere agregar otra nota?'));

let promedioAprobados = sumaAprobados / cantidadAprobados;
let promedioDesaprobados = sumaDesaprobados / cantidadDesaprobados;
let promedioPromocionados = sumaPromocionados / cantidadPromocionados;


alert(`Cantidad aprobados: ${cantidadAprobados}
    cantidad desaprobados: ${cantidadDesaprobados}
    cantidad promocionados: ${cantidadPromocionados}`);

alert(`Suma total aprobados: ${sumaAprobados}
    suma total desaprobados: ${sumaDesaprobados}
    suma total promocionados: ${sumaPromocionados}`);

alert(`promedio de aprobados: ${promedioAprobados}
    promedio de desaprobados: ${promedioDesaprobados}
    promedio de promocionados: ${promedioPromocionados}`);


alert(`la nota mas chica es: ${notaMinima}
    la nota mas grande es: ${notaMaxima}`);