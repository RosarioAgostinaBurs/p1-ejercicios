
function validarString(mensaje = "") {

    let foo;
    let datoValido = true;

    do {
        foo = prompt(mensaje);

        if (foo.trim() === "") {
            alert('Por favor no deje el campo vacio');
            datoValido = false;
        } 
        else if (foo === null) {
            alert('Por favor complete el campo');
            datoValido = false;
        }
        else if (!isNaN(foo)) {
            alert('No ingrese números');
            datoValido = false;
        }
        else {
            datoValido = true;
        }

    } while(!datoValido);

    return foo;
}


function validarNota() {

    let foo;
    let = datoValido = true;

    do {
        foo = parseInt(prompt('Ingrese la nota'));

        if (foo < 4 || foo > 10) {
            alert('La nota debe estar entre 4 y 10');
            datoValido = false;
        }
        else if (isNaN(foo)) {
            alert('Por favor solo escriba números');
            datoValido = false;
        }
        else {
            datoValido = true;
        }

    } while(!datoValido)

    return foo; 
}