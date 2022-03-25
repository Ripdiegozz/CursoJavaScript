
// let numeroInicial = 0 
// let numeroFinal = 5 

// while (numeroInicial < numeroFinal){
//     console.log(numeroInicial)   
//     numeroInicial = numeroInicial + 1
// }

// Escriba un programa en JavaScript para encontrar la suma de los primeros 10 números naturales.

// let contadora = 0
// let suma = 1

// while (contadora <= 10){
//     contadora = contadora + suma;
//     suma ++
// }

// Escriba un programa en JavaScript para sumar 10 numeros naturales y conseguir el promedio de estos.

let counter = 0
let total = 0
let average = 0
let vueltas = 10

while (counter < vueltas){
    let input = prompt('Ingresa un numero', '');
    console.log(input);
    total = total + parseFloat(input)
    console.log(total);
    counter = counter + 1
}

average = total/vueltas

alert(`El promedio de tu suma es ${average}`)