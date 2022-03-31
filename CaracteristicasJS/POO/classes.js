// PARA CREAR CLASES EN JAVASCRIPT UTILIZAMOS LA PALABRA RESERVADA "class"

// EJEMPLO CON EL PROTOTIPO ANIMAL DEL ARCHIVO PROTOTIPOS CONVIRTIENDOLO A CLASE

class Animal{ // La clase no recibe parametros como si sucedia con 
             // el prototipo, "Animal(nombre, genero)"

    // El constructor es un metodo especial que se 
    // ejecuta al momento de instanciar una clase

    // ATRIBUTOS

    constructor(nombre, genero){ // Los parametros los recibe la variable constructora que va dentro de la clase.

    this.nombre = nombre;
    this.genero = genero;
    
    }

    // METODOS

    // Los metodos se declaran de forma literal como en los objetos, ejemplos:

    sonar(){
        console.log('Hago este sonido porque estoy vivo.')
    }    

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }

    genre(){
        console.log(`Soy ${this.genero}`)
    }

}

// Declaracion de nuevos animales

const scooby = new Animal(`Scooby Doo`, `Macho`);

const mimi = new Animal(`Mimi`, `Hembra`);


scooby.saludar(), scooby.genre(), scooby.sonar();

console.log(`\n`)

mimi.saludar(), mimi.genre(), mimi.sonar();

console.log(`\n`)


console.log("*****************************/ :D /*****************************")

// NOTA: LOS METODOS PRVIADOS EN JS NO EXISTEN
// TODAS LAS CLASES SON PUBLICAS

// METODO STATIC

/*

Un metodo estatico es aquel que se puede
ejecutar sin la necesidad de instanciar 
una clase.

Ejemplo:

*/

class Auto{ 

constructor(marca, anio, motor){ 

this.marca = marca;
this.anio = anio;
this.motor = null; // Esta variable la declaramos para usar el metodo setter

}

/* 

Al agregar la palabra reservada "static" no necesitamos crear un nuevo objeto auto
para ejecutar el metodo de la clase auto

*/


static sonar(){
console.log('Hago este sonido porque soy un auto.')
}    

age(){ 
console.log(`Mi año de fabricacion es ${this.anio}`)
}

genre(){
console.log(`Soy de la marca ${this.marca}`)
}


// SETTERS Y GETTERS

/* 

Los setters y getters son metodos especiales    
que nos permiten establecer y obtener valores   
de atributos de nuestra clase

*/
            
get getMotor(){ // El metodo get u obtenedor lo unico que va a hacer es obtener el valor del atributo de la clase
    return this.motor;
}

set setMotor(motor){ // El metodo set le agrega un valor al atributo
    this.motor = motor;
}
}

Auto.sonar(); // Como podemos observar en la consola, el  metodo se ejecuta sin tener que crear
            // un nuevo auto, unicamente llamando a la clase + metodo

const tesla = new Auto ("Tesla", "2022");

tesla.setMotor = "Electrico"; // La declaracion del valor de el metodo get se debe hacer fuera de la clase y se trabaja como si fuera una
                              // propiedad

console.log(tesla.getMotor);





