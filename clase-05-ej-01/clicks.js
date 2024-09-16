function cargarNombre() {

    // Pido y valido string
    const nombre = validarString('Ingrese el nombre del alumno');

    // Paso la variable que tiene el nombre del alumno ya validado al objeto alumno que tengo en el index
    alumno.nombre = nombre;
}

function cargarMateria() {

    // Pido y valido string
    const nombreMateria = validarString('Ingrese el nombre de la materia');

    // Pido y valido nota
    const nota = validarNota();

    // Creo el objeto materia que tenga el nombre de la materia cargada con su nota correspondiente, todo ya validado
    let materia = {
        "nombre_materia": nombreMateria,
        "nota": nota
    };

    // Paso el objeto materia al array materias que tengo en el objeto alumno del index
    alumno.materias.push(materia);
}

function cargarAlumno() {

    // Cargo el objeto alumno al array alumnos que esta vacio en el index
    alumnos.push(alumno);

    // Para no pisar al objeto anterior que acabo de cargar, tengo que volver a inicilizar otra vez el objeto
    alumno = {
        "materias": []
    };
}


function mostrarLista() {

}