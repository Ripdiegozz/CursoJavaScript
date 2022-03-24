
console.log(`// HERENCIA EN CLASES`);
console.log(`\n`);
console.log(`Clase Animal`)
console.log(`\n`)
    
class Animal{ 

constructor(nombre, genero){

this.nombre = nombre;
this.genero = genero;

}

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

const scooby = new Animal(`Scooby Doo`, `Macho`);

const mimi = new Animal(`Mimi`, `Hembra`);

scooby.saludar(), scooby.genre(), scooby.sonar();

console.log(`\n`)

mimi.saludar(), mimi.genre(), mimi.sonar();

console.log(`\n`)



// Para realizar la herencia de una clase a otra usamos la palabra reservada "extends"

console.log("CLASE PERRO CON HERENCIA DE CLASE 'PADRE' ANIMAL")
console.log(`\n`)

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
    // Con el metodo super se manda a llamar 
    // al constructor de la clase padre

    super(nombre, genero) // Recordemos que nombre y genero pertenecen a la clase Animal que es de la cual hereda
                             // propiedades la clase perro

    this.tamanio = tamanio; // Las propiedades exclusivas de la clase perro las agregamos dentro de constructor
    
    }

    // Los metodos se agregan de igual manera y los de la clase padre ya estan en la clase hijo sin tener 
    // que colocarlos explicitamente

    sonar(){ // SOBRESCRITUTA DE METODOS DE LA CLASE PADRE
        console.log("Soy un perro y mi sonido es un ladrido")    
    }
    
    ladrar(){
        console.log("Guau Guau !!!!")    
    }    

    size(){
        console.log(`Soy un canino ${this.tamanio}`)
    }

}

const akali = new Perro("Akali", "Hembra", "Grande")

const tango = new Perro("Tango", "Macho", "Muy grande")

akali.saludar(), akali.genre(), akali.sonar(), akali.ladrar(), akali.size();

console.log(`\n`)

tango.saludar(), tango.genre(), tango.sonar(), tango.ladrar(), tango.size();

console.log(`\n`)
