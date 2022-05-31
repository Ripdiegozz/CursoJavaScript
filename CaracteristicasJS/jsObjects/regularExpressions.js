/*

Expresiones Regulares

https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

Son una secuencia de caracteres que forma un patron de busqueda, 
principalmente utilizada para la busqueda de patrones
de cadenas de caracteres

*/

alert('Programa para validar si se inserto Cedula de Ciudadania');

let ccDiego = prompt('Ingresa tu Cedula de Ciudadania');

console.log(ccDiego);


let expReg = new RegExp(ccDiego, '^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$')

console.log(expReg.test(ccDiego))