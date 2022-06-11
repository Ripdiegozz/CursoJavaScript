/*

Expresiones Regulares

https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

Son una secuencia de caracteres que forma un patron de busqueda, 
principalmente utilizada para la busqueda de patrones
de cadenas de caracteres

*/

let cadena = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet massa sed turpis 
              viverra porttitor. Ut consequat felis eu libero viverra, at ultricies magna gravida. 
              Etiam sed dolor quis lacus temporlorem posuere vitae sit amet elit. Aliquam pellentesque 
              eget velit nec tincidunt. Phasellus feugiat vitae orci eget venenatis. Nulla quis faucibus
              metus. Ut vitae velit sagittis, convallis enimlorem a, consectetur magna. Vivamus elementum ipsum
              nibh, ut sollicitudin neque auctor eget.`;


/* 
   la forma de declarar expresiones regulares es con dos parametros
   new RegExp('cadena que vamos a testear', 'banderas que vamos a agregar')
   
   banderas importantes: 

   i -> ignora mayusculas y minusculas
   g -> no se detiene en la primera coincidencia, cuenta todas las coincidencias de la expresion regular
*/              

/*
   rangos en expresiones regulares:
    
   {} -> para dar una probabilidad. ej: {2, 3} // esto quiere decir que el conjunto de caracteres se puede repetir
                                                  de dos a tres veces


*/

let expReg = new RegExp('lorem','ig');

let expReg2 = /lorem/ig;


//console.log(expReg.test(cadena));
//console.log(expReg.exec(cadena));


console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
