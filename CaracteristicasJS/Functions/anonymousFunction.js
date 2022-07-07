// Funcion anonima Auto-Ejecutable

alert('Hola');/* ->  Funcion con nombre, a diferencia de la funcion anonima esta la reconocemos por su nombre 'alert'*/

// Si metemos la funcion sin nombre dentro de paretesis ya no nos tira error el vs code
/* En este caso como podemos apreciar la funcion no tiene nombre, esto en esencia es la funcion anonima, funciones sin nombre*/

(function () {
    console.log('My first IIFE');
    
})();

(function (d, w, c) {
    console.log('My second IIFE');
    console.log(d);
    console.log(w);
    c.log('Esto es un autoejecutable'); /* En este caso no colocamos 'console.log' sino c.log porque en nuestra funcion anonmia "C" ya tiene el 
                                           alias de console, por lo tanto en la interpretacion de javascript c.log dentro de esta funcion anonima
                                           es lo mismo que colocar console.log*/
    
})(document, window, console);

// TIPOS DE FUNCIONES ANONIMAS

/* ANONIMA CLASICA (UTILIZADA EN ESTA CLASE) */

(function () {
    console.log('Esta es la funcion anonima autoejecutable clasica');
    
})();

/* ANONIMA CROCKFORD (JAVASCRIPT THE GOOD PARTS (Libro muy popular de la decada pasada))*/

((function () {
    console.log('Version de Crockford')
})());

/* ANONIMA UNARIA */

+function (){
    console.log('Version Unaria')
}();

/* ANONIMA VERSION DE FACEBOOK */

!function (){
    console.log('Version de Facebook')
}();
