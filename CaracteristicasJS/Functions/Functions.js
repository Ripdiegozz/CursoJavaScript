// Declarar una funcion

function saludo() {
    console.log('Hola!')
}

saludo()

// Retornar una funcion

function saludo() {
    console.log('Hola');
    return '19';
    // Si colocamos un return antes que otras operaciones o argumentos de la funcion estos se van a ignorar
    console.log('Hola2');
    console.log('Hola3');    
    return 'Esta funcion te devuelve tres saludos';
}

let funcionSaludo = saludo();

console.log(funcionSaludo);

// Hacer una funcion con parametros del usuario
// Si el usuario no introduce ningun valor, podemos colocar uno predefinido a los parametros 

function saludo(nombre = 'Desconocido', apellido = 'Desconocido', edad = 0) {
    console.log(`Hola! mi nombre es ${nombre} ${apellido} y a la fecha de hoy tengo ${edad} años de edad.`);
}

saludo('Diego', 'Garcia',17);
saludo();


// FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS

// Funcion declarada 

funcionDeclarada();

function funcionDeclarada(){
    console.log(`Esto es una funcion declarada, puede ejecutarse en 
    cualquier parte de nuestro codigo, incluso antes de ser declarada`);
    
}

funcionDeclarada();

// Funcion anonima / Funcion Expresada

const funcionExpresada = function() {
    console.log(`Esto es una funcion expresada, es decir, una funcion que
    se le ha asignado como valor a una variable, si invocamos esta funcion
    antes de su definicion o declaracion JS nos dara error`);
    
}

funcionExpresada();


