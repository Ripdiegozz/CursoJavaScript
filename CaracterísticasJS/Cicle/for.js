// let total = 0 
// let vueltas = 10

// for (let i = 0; i < 10; i++) {
//     let input = prompt('Ingresa un numero', '');
//     console.log(input);
//     total = total + parseFloat(input)
//     console.log(total);
// }

// let average = total/vueltas

// alert(`El promedio de tu suma es ${average}`)



        
/* Escriba un código JS para imprimir números pares hasta cierto numero */

// function imprimirPares(n) {
//     for (let i = 0; i < n; i+=2) {
//        if (n %2==0) {
//         let paresUsuario = i + 2;    
//         console.log(paresUsuario);
//        } else{
//            console.log('Este numero no es par')
//        }
//     }
// }

// imprimirPares(10)

/* Escribe un código JS para encontrar la potencia de un número usando for loop */

let inicio = 1

function encontrarPotencia(b, p) {
    for (let i = 0; i < p; i++) {
        inicio = inicio * b;     
    }
    console.log(inicio);   
}

encontrarPotencia(25,5)


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

// Para mostrar el value y key de un Object podemos utilizar el metodo FORin, el cual SOLO
// nos permite recorrer las propiedades de un objeto

for (const propiedad in diego) { 
    // Lo que llamamos 'propiedad' en este FORin es 
    //solo un nombre simbolico para la variable que representa las keys y los values
    
    console.log(`Key: ${propiedad}, value: ${diego[propiedad]}`);

    // Para iterar o acceder al value de una key colocamos el nombre 
    // del objeto y luego unas llaves ( [] )
    // En este caso; diego['nombre de la variable del FORin']
    
}


// Para recorrer cualquier objeto que sea itinerable en JavaScript en este caso utilizamos el metodo FORof
// Este nos permite recorrer casi todo lo que tengamos en nuestro codigo

const letras = "Hola, mi nombre es diego"

for (const caracteres of letras) {
    console.log(letras);
}


