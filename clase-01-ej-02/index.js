let categoria = prompt(`Ingrese categoria 1: $1000 - 2: $1500 - 3: $2000`);
let sueldo;
let subcategoria = prompt(`Ingrese subcategoria A: 1.5 - B: 2 - C: 2.5`);
let rango;

if (categoria == 1) {
    sueldo = 1000;
} else if (categoria == 2) {
    sueldo = 1500;
} else if (categoria == 3) {
    sueldo = 2000;
} else {
    alert('error en categoria');
    sueldo = 0;
}

alert(`el sueldo es de ${sueldo}`);

switch (subcategoria.toUpperCase()) {
    case 'A':
        sueldo *= 1.5;
        break;
    
    case 'B':
        sueldo *= 2;
        break;

    case 'C':
        sueldo *= 2.5;
        break;

    default:
        alert('error en subcategoria');
}

alert(`la subcategoria es ${subcategoria} y el sueldo queda en ${sueldo}`);


if (sueldo >= 1500 && sueldo < 3000) {
    rango = 'inicial';
} else if (sueldo >= 3000 && sueldo < 4000) {
    rango = 'intermedio';
} else if (sueldo >= 4000) {
    rango = 'avanzado'
} else {
    alert('No pudimos identificar tu rango');
}

alert(`Tu rango es ${rango}`);