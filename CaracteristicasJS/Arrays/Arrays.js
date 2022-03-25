// THE ARRAYS ARE PROTOTYPES

const a = []; // Arreglo sin nada dentro

const ab = [1, true, 'hola', 12.3, ['A', 'B', 'C'], [1, 2, 3, [4, 5, 6]]] // Arreglo con todo tipo de datos dentro

console.log(ab);    

// Y POR SUSPUESTO ESTOS TAMBIEN TIENEN SUS METODOS Y PROPIEDADES. (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#)

// La propiedad ".length" nos devuelve el numero de elementos 

console.log(ab.length); // Esto nos devolvera 6 porque es el numero de datos de nuestro array ab (contando de 0 a 5 hay 6 datos)

// Para poder acceder a un dato en especifico de un array usamos "[numero del dato]" esto se conoce como indice

console.log(ab[0]); // Esto nos devolvera '1'
console.log(ab[2]); // Esto nos devolvera 'Hola'

// Para acceder al array dentro de otro array debemos colocar el [] dos veces

console.log(ab[4][0]); // Esto nos devolvera 'A'
console.log(ab[5][2]); // Esto nos devolvera '3'
console.log(ab[5][3][1]); // Esto nos devolvera '5'

// Una nueva manera de crear arrays es con el metodo 'array.of()'
const abc = Array.of(); // Dentro del metodo "of" debemos introducir los datos que queremos para nuestro array

// Esto es lo mismo que colocar "const arrayConMetodo = ['A', 'B', 'C', 1, 2, 3]"
const arrayConMetodoOf = Array.of('A', 'B', 'C', 1, 2, 3);

// Tambien podemos crear arrays con el metodo fill(), pero primero debemos especificar cuantas veces queremos 
// el dato del cual vamos a llenar nuestro array, en este caso 10

const arrayConMetodoFill = Array(10).fill('FESC');

// Recorrer un Array con el metodo forEach()
const frutas = ["banana", "fresa", "mango"];
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array);
})

// Agregar un elemento al final del array metodo ".push"

frutas.push('naranja'); // Ahora el array es ["banana", "fresa", "mango", "Naranja"]

// Quitar un elemento al final del array metodo ".pop"

frutas.pop(); // Esto elimina 'naranja' del array porque era el ultimo dato

// Colocar un dato al inicio del array metodo ".unshift"

frutas.unshift('mandarina'); // Ahora el array es ["mandarina", "banana", "fresa", "mango"]

// Quitar un dato al inicio del array meodo ".shift"

frutas.shift(); // Esto elimina 'mandarina' del array porque era el primer dato

// Encontrar el indice de un dato en el array metodo ".indexOf"

let posBanana = frutas.indexOf('banana') // Esto nos devolvera 0
let posMango = frutas.indexOf('mango') // Esto nos devolvera 2

console.log(`Las posiciones de banana y mango son ${posBanana} y ${posMango} respectivamente`) 



// Los arreglos se pueden usar para ejecutar ciclos




// function compareTriplets(a, b){
//     let p = [0, 0];
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] > b[i]) {
    //         p[0]++;
    //     }else if (a[i] != b[i]){
    //         p[1]++;
    //     }
        
    // }
//     return p;
// }






console.log('******************** MATRICES ********************')

// LAS MATRICES SON ARRAYS DENTRO DE ARRAYS

const matriz_A = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
] // Ejemplo sencillo

// POR LO TANTO LOS METODOS Y PROPIEDADES DE LOS ARRAYS TAMBIEN APLICAN A LAS MATRICES
  
