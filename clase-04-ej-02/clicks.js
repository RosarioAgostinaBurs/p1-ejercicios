

function cargarAlumno() {
    alumno = validarString('Ingrese el nombre del alumno');
}

function cargarMateria() {
    // Pido la material y la valido
    let materia = validarString('Ingrese el nombre de la materia');
    // Guardo la materia en el array
    materias.push(materia);

    // Pido la nota y la valido
    let nota = validarNumero(`Ingrese su nota de final de ${materia}`);

    // Guardo la nota en el array
    notas.push(nota);
}

function mostrar() {
    /**
     * Así es como lo quiero mostrar:
     * <h1>${alumno}</h1>
     * <h2>Materias</h2>
     * <ul>
     *      <li>${materia} - ${nota}</li>
     *      <li>${materia} - ${nota}</li>
     *      <li>${materia} - ${nota}</li>
     *      <li>${materia} - ${nota}</li>
     * </ul>
     */


    // Encuentro el elemento y lo guardo en una variable
    const container = document.querySelector(".container");

    // Limpio el codigo
    container.innerHTML = "";

    // Creo el h1 con el nombre del alumno y lo agrego a la variable container la cual tiene al div class container
    container.innerHTML += `<h1>${alumno}</h1>`;
    container.innerHTML += `<h2>Materias</h2>`;

    // Creo la lista, que se cierra automáticamente
    container.innerHTML += `<ul>`;

    // Encuentro la lista que cree recien
    const ul = document.querySelector("ul");

    // Agrego las materias a la lista

    /**
     * Acá tengo que saber cuantas materias son las que quiero mostrar
     * ul.innerHTML += `<li>${materias[0]} - ${notas[0]}</li>`;
     * ul.innerHTML += `<li>${materias[1]} - ${notas[1]}</li>`;
     * ul.innerHTML += `<li>${materias[2]} - ${notas[2]}</li>`;
     */

    
    // Lo muestro con un FOR común
    //  for(let i = 0; i < materias.length; i++) {
    //    ul.innerHTML += `<li>${materias[i]} - ${notas[i]}</li>`;
    //}


    // Estos dos for son específicos para arrays, me sirve en este caso el for in

    // For IN
    for(let i in materias) {
        ul.innerHTML += `<li>${materias[i]} - ${notas[i]}</li>`;
    }

    // For OF
    // No sirve porque accedo al elemento, con for in accedo al indice
    //for(materia of materias) {
    //    ul.innerHTML += `<li>${materia}</li`;
    //}
    
    
}