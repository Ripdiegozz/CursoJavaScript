// ar.length -> numero de filas

// Reto: Hacerlo dinámico y ponerlo en una función

// SOLUCION NUMERO 1: DENTRO DE UNA FUNCION 

function programaPromedio(ar) {
    
    // Filas del array
    for (let i = 0; i < ar.length; i++) {
        let suma = 0;
        // Columnas del array 
        for (let j = 1; j < ar[i].length; j++) {
            suma += ar[i][j];
        }    
        let promedio = suma/(ar[i].length-1);
        let mensaje = `El promedio del estudiante ${ar[i][0]} es igual a ${promedio}`;
        console.log(mensaje);
        
    }    
}
let matrizAlumnos = [
    ["Gustavo",10,10,10,10],
    ["Nicolas",10,9,10,9]
];
let matrizAlumnos2 = [
    ["Gerardo",7,10,9,10],
    ["Diana",10,9,10,10]
];

programaPromedio(matrizAlumnos);
programaPromedio(matrizAlumnos2);


// SOLUCION 2: HACIENDOLO RESPONSIVO PARA EL CLIENTE

//Rellenando matriz con un prompt
let matriz = [];

let numeroAlumnos = Number(prompt("Ingresa el número de alumnos"));
let numeroDatos = Number(prompt("Ingresa el número de datos (Contando el nombre como un dato)"));

for(let i=0;i<numeroAlumnos;i++){
let datos = [];
for(let j=0;j<numeroDatos;j++){
    if(j===0){
        datos[j] = prompt("Ingresa el nombre:");
    }else{
        let datoUsuario = prompt("Ingresa la calificación:");
        datos[j] = parseInt(datoUsuario);
    }
    
}
matriz[i] = datos;
}

console.log(matriz);
//Reto: Resolver staircase