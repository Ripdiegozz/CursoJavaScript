console.log(window);

// alert('Hola esto es una alerta')
// confirm('Hola esto es una confirmacion')
// prompt('Hola esto es un aviso y le permite al usuario ingresar un valor')

let alerta = alert('Esto es una alerta');
/* NOTA: LAS ALERTAS NO ES NECESARIO COLOCARLAS EN VARIABLES DEBIDO A QUE NO GUARDAN NINGUN TIPO DE DATO
         SIEMPRE SERAN UNDEFINED*/

let confirmacion = confirm('Esto es una confirmacion');
/* NOTA: SI DAMOS EN ACEPTAR A LA CONFIRMACION LA VARIABLE SERA TRUE, SI DAMOS EN CANCELAR EN UNA
         CONFIRMACION LA VARIABLE SERA FALSE*/

let aviso = prompt('Esto es un prompt y le permite al usuario ingresar algun valor');
/* NOTA: SI EL USUARIO INGRESA CUALQUIER TIPO DE INFORMACION Y DA EN ACEPTAR ESE DATO SERA ALMACENADO EN LA
 VARIABLE, PERO SI DA EN CANCELAR EL VALOR DE LA VARIABLE SERA NULL*/

console.log(alerta); 
console.log(confirmacion);
console.log(aviso);

