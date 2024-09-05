// Declaro Arrays vacios
let foo = [];
const bar = [];

// Agrego elementos al Array
foo[1] = 'Primer elemento';
foo[2] = 123;

// Al definir foo[100] se llenan del foo[3] al foo[99] con undefined
foo[100] = 'Este es el último elemento';


// Una mejor forma de agregar elementos
bar.push('Primer elemento');
bar.push(123);
bar.push(true);


// Intento copiar todos los elementos de bar en baz (un error)
let baz = bar;
// En realidad estoy copiando la referencia


// Ahora tengo 4 elementos en bar y baz
baz.push('Nuevo elemento');