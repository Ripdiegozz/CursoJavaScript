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

