let numeroMinimo = +prompt('Ingrese un numero minimo');
let numeroMaximo = +prompt('Ingrese un numero máximo');
let numero = +prompt('Ingrese un número');

if (numero >= numeroMinimo && numero <= numeroMaximo) {
    alert('El número está en rango');
} else {
    alert('El número no está en rango');
}

if (numero % 2 === 0) {
    alert('El número es par');
} else {
    alert('El número es impar');
}