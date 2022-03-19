/* HACER UN REGISTRO DE CONSOLA */ 

console.log("Hola, Mundo");
console.log("Hola, Pedro");
console.log("Hola, Juan");
console.log("Hola, Jean");


console.log(" ********** STRINGS Y SUS METODOS *************** ");

// Strings ---> Expresiones en caracteres alphanumericos

let epoca = "Holidays";
let cumpleaños = "29-Marzo";

// MÉTODOS  

console.log(epoca.length) // .length nos indica la amplitud de caracteres del string
console.log(epoca.toUpperCase()); // .toUpperCase convierte todos los caracteres del string de manera imperativa en mayúsuculas
console.log(epoca.toLowerCase()); // .toLowerCase convierte todos los caracteres del string de manera impertiva en minúscula

// .includes nos devolverá un true o un false dependiendo de si el string contiene ciertos caracteres o no

console.log(epoca.includes("Holidays")); // true
console.log(epoca.includes("Workday")); // false

console.log(epoca.trim()); // .trim elimina los espacios en blanco al inicio y al final de un string
console.log(epoca.split("h")); // .split separa los caracteres que colocamos dentro del método

console.log(" ********** Concatenacion e interpolación de STRINGS *************** ");

// para concatenar usamos el operador "+"

let special_day = "el" + " " + epoca + " " +"de mi mamá es el" + " " + cumpleaños;

console.log(special_day); // "el holidays de mi mamá es el 29-Marzo"

// interpolación de STRINGS --> Utilizamos ${variable} para unir distintos strings, ejemplo:

let dia_Especial = `el ${epoca} de mi mamá es el ${cumpleaños}`;
console.log(dia_Especial);

// NOTA: para armar el string no debemos usar comillas " ", si no, tilde invertida ` ` (back tick)


// Utilizar codigo html para un string directamente, usando back tick SIEMPRE.

let ul = 
`
<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Invierno</li>
</ul>
`
console.log(ul)
