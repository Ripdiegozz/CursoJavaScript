
// REST y Spread son datos que se agregan como argunmentos pero que no estan definidos como tal, por 
// lo tanto pueden ser cuantos quieran y estar o no estar, esto no afecta el funcionamiento de nuestra
// function en javascript
// La forma de invocarlas es colocando tres puntos detras del nombre de la variable

console.log("// EJEMPLO DE REST:");

function suma (a, b, ...c){ // En este caso el parametro rest es la variable "c"
    
    let total = a + b // Esta parte siempre se ejecuta

    c.forEach(n => { // Esta parte de la funcion no se ejecuta puesto que no hay variable C
        total += n;
    });
    return total
}

console.log(suma(1,2)); // 3  

// En este caso se esta omitiendo la variable "C" y no nos lanza ningun error
// porque al ser un parametro rest no importa si esta presente o no

function suma (a, b, ...c){ // En este caso el parametro rest es la variable "c"
    let total = a + b

    c.forEach(n => {
        total += n;
    });
    return total
}

console.log(suma(1,2))
console.log(suma(1,2,3));  // 6
console.log(suma(1,2,3,4));  // 10
console.log(suma(1,2,3,4,5));  // 15
console.log(suma(1,2,3,4,5,6));  // 21
console.log(suma(1,2,3,4,5,6,7));  // 28

// En este caso se agrega un argumento adicional que va a representar la 
// variable c y con el metodo forEach hacemos representar la variable C como un array, por lo tanto
// puede representarse con muchos datos, es decir, desde el 3 en adelante todos son las variable C


console.log("// EJEMPLO DE SPREAD:");

// Spread es muy util para cuando queremos unir dos tipos de datos, en este caso vamos a unir dos arrays
// Creamos un nuevo array y anterior al nombre de los arrays ya creados colocamos los 3 puntos

// de esta manera el tercer array no tendria dos arrays dentro sino que seria un solo array con los datos
// de los dos arrays ya creados anteriormente.


// Declaracion de arrrays

const edades = [17,15,16,17,17,17,18];

const altura = [169, 180, 156, 178, 176, 169, 191];


// Declaracion de nuevo array


const datosEstudiantes = [...edades, ...altura]; // De esta manera tendremos dentro solo los datos
const datosEstudiantes1 = [edades, altura]; // De esta manera dentro no tendremos los datos sino los dos arrays
                                            // anteriores de forma literal

console.log(datosEstudiantes);
console.log(datosEstudiantes1)