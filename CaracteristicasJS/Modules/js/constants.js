export const PI = Math.PI;

export let user = 'John';

export let password = 'abc123'; /* Si queremos exportar de manera default una variable como let var o const debemos hacerlo debajo de haberla
                                   declarado */
// export default password;

export default function saludo(){
    console.log('Hola, modules JavaScript')
}

export class Saludar{
    constructor(){
        console.log('Hola, clases JavaScript')
    }
}

