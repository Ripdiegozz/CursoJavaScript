/* 

Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre 
                   pueda validad a true, es el valor que se encargará por defecto

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre
                    pueda validar a false, es el valor que se cargará por defecto

*/ 

function saludar (name){
    name = name || 'Desconocido';

    console.log(`Hola ${name}, como te encuentras hoy?`);
}

saludar();
saludar('Diego');


/* 
Como el valor de la izquierda es TRUE en sus distintas expresiones 
el console.log nos tira el valor de la izquierda en consola
*/

console.log('cadena' || 'Valor de la derecha');
console.log('4' || 'Valor de la derecha');
console.log('[]' || 'Valor de la derecha');
console.log('{}' || 'Valor de la derecha');
console.log(true || 'Valor de la derecha');

/* 
Como el valor de la izquierda es FALSE en sus distintas expresiones 
el console.log nos tira el valor de la derecha en consola
*/

console.log(false || 'Valor de la derecha');
console.log(null || 'Valor de la derecha');
console.log(undefined || 'Valor de la derecha');
console.log('' || 'Valor de la derecha');
console.log(0 || 'Valor de la derecha');


/*

MISMOS VALORES USANDO AND

A diferencia de OR, si el valor en AND es false va a imprimir el valor de la izquierda
y si es verdadero va a imprimir el valor de la derecha

En resumen, AND es todo lo contrario a OR pero funcionan de la misma manera
se complementan y son inversos :D

*/

/*

Estos valores de la izquierda son false en sus distintas expresiones por lo tanto
se va a imprimir el valor de la izquierda

*/
console.log(false && 'Valor de la derecha');
console.log(null && 'Valor de la derecha');
console.log(undefined && 'Valor de la derecha');
console.log('' && 'Valor de la derecha');
console.log(0 && 'Valor de la derecha');

/*

Estos valores de la izquierda son true en sus distintas expresiones por lo tanto
se va a imprimir el valor de la derecha

*/
console.log('cadena' && 'Valor de la derecha');
console.log('4' && 'Valor de la derecha');
console.log('[]' && 'Valor de la derecha');
console.log('{}' && 'Valor de la derecha');
console.log(true && 'Valor de la derecha');

