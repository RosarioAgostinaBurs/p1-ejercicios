function foo() {
    // Todo lo que esté acá es lo que la función va a ejecutar cuando la llame
}


// Llamo a la función
//saludar();

/**
 * Función que escribe 'Hola' por alert
 */
function saludar() {
    alert('Hola');
}


// Creo variables para pasarle como parametro cuando llamo a la funcion
let nombre = 'Jose';
let segundoNombre = 'Carlos';

/**
 * Funcion que saluda por alert
 * @param {String} nombre string con el nombre de la persona a saludar
 */
function saludarPorNombre(nombre = 2) {

    if (nombre === 2) {
        alert('Hola!');
    } else {
        alert(`Hola ${nombre}`);
    }
}


saludarPorNombre(nombre);
saludarPorNombre(segundoNombre);
saludarPorNombre('Pérez');
saludarPorNombre();