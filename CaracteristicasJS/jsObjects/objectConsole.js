// Objeto Console en JS

console.log(console);

console.error("Esto es un error");

console.warn("Esto es un aviso");

console.info("Esto es un mensaje informativo");

console.log("Un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Diego",
    apellido = "Garcia",
    edad = 18,
    anio = 2022;


console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);

/* 
    Manera tradional de colocar
    variables en un string en JS.                   
                ↓	
*/
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años de edad`); 


/*
    Manera de colocar variables        
    en un string de JS parecida      
    a la de otros lenguajes.                                                         
                ↓         
                
~ Comodines
                
%s for a String

%d or %i for Number

%f for Floating points

%o for an Object

%j for an JSON

*/

console.log(`Hola mi nombre es %s %s y tengo %d años de edad en %i`, nombre, apellido, edad, anio);

console.clear(); // Limpiar consola


console.log(window);    
console.log(document);


console.dir(window);   
console.dir(document); // console.dir es una manera mas eficiente de ver todos los componentes de 
                        // lo que necesitemos 

console.clear();

console.groupCollapsed("Cursos Udemy 2022"); // Crear una lista de objetos agrupados en la consola 
console.log("Curso de PHP");
console.log("Curso de React");
console.log("Curso de HTML y CSS");
console.log("Curso de JavaScript");
console.log("Curso de WebSockets");
console.groupEnd()

console.clear(); 

const diego = {
    "nombre":"Diego",
    "apellido":"Garcia",
    "edad":"18",
    "pasatiempo":"Jugar lol la ptm",
    contacto:{
        "email":"diegogarciag63@gmail.com",
        "telefono":"320-2923-961",
        "twiiter":"@Ripdiegozz"  
    },
}



console.table(Object.entries(diego)) // Crear una tabla para mostrar una array u objeto

let vocales = ["a", "e", "i", "o", "u"],
    numeros = [1, 2, 3, 4, 5];

console.table(vocales);
console.table(numeros);


console.clear();


console.time('ArrayTime') // Medir el tiempo en el que se ejecuta un bloque de codigo

const arreglo = Array (1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
    
}

console.timeEnd('ArrayTime');

console.clear();


for (let i = 0; i <= 100; i++) {
    console.count("Codigo for") // Contar cuantas veces se repite tu bloque de codigo
    console.log(i); 
}

console.clear();

let x = 1,
    y = 2,
    pruebaXandY = "Se espera que X sea menor que Y"

console.assert(x < y, {x, y, pruebaXandY}); // Para manejo de errores a los resultados esperados
                                            // En este caso no tira error porque x SI es menor que Y

let a = 3,
    b = 2,
    pruebaAandB = "Se espera que A sea menor que B"

console.assert(a < b, {a, b, pruebaAandB}); // En este caso si tira error porque A es mayor que B

console.log("https://developer.mozilla.org/es/docs/Web/API/Console")