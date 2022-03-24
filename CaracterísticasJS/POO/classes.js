
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




