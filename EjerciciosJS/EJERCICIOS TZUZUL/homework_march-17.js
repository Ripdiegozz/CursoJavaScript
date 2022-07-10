
// CICLO PARA IMPRIMIR SOLO NUMEROS PARES

// var num1 = parseInt(prompt("Ingrese un numero: "));
// var num2 = parseInt(prompt("Ingrese otro numero: "));

// let min = Math.min(num1, num2);
// let max = Math.max(num1, num2);
// let numeros = Array.from({length: max - min + 1}, (v, i) => i + min);
// if (num1 > num2) numeros.reverse();
// // console.log(numeros);

let paresalerta = prompt(`Indica hasta que número quieres ver : `);

let pares = [];

for (let i = 0; i < paresalerta; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log(pares)



const datos = ['diego', 17, 1.78, 'cucuta'];

const [nombre, edad, estatura, ciudad] = datos;

console.log(`Mi nombre es ${nombre}, tengo ${edad} años de edad, mido ${estatura} metros y resido en la ciudad de ${ciudad}`);