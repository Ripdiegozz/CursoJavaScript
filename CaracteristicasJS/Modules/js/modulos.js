import saludo, {Saludar, PI, user, password} from "./constants.js"
import {arithmetic as calc} from "./arithmetic.js"

console.log(`Archivo 'Modulos.js'`);

console.log(PI);

console.log({
    'user': user,
    'password': password
});

saludo();

const saludo2 = new Saludar();
saludo2;

console.log(`La suma de 5 y 3 es igual a = ${calc.sumar(5,3)} \n\nLa resta de 5 y 3 es igual a = ${calc.restar(5,3)}`);

