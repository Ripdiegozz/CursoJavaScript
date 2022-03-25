// P O O (Object Oriented Programming)

/*

Clases => Modelo a seguir

Objetos => Instancia de una clase

Atributos => Es una caracteristica o propiedad del objeto
(Son variables dentro de un objeto)

Metodos => Son las acciones que un objeto puede realizar
(Son funciones dentro de un objeto)


*/ 

// Haciendo los objetos de esta manera nos ocuparia demasiado espacio en nuestro archivo de codigo,
// Por lo tanto podemos utilizar las clases, las cuales nos ahorrarian mucho trabajo

const animal = {
    nombre:"Bugs Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo.")
    }
}

const animal2 = {
    nombre:"Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy viva.")
    }
}

// Funcion constructora

function Animal(nombre, genero) {

    // ATRIBUTOS

    this.nombre = nombre;
    this.genero = genero;

} // LOS METODOS DEBEN IR FUERA DE LA FUNCION, POR LO TANTO DEBEMOS
// ASIGNAR LOS METODOS AL PROTOTIPO Y NO A LA FUNCION

// LAS FUNCIONES CONSTRUCTORAS UNICAMENTE CON SUS ATRIBUTOS

    // METODOS

Animal.prototype.sonar = function (){ // CON LA SINTAXIS "funcionConstructora.prtotype.metodo" 
    console.log("Hago sonidos porque estoy viv@.") // asignamos el metodo al prototipo
    
}

Animal.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

// Construccion de objetos

const BugsBunny = new Animal("Bugs Bunny", "Macho"),
LolaBunny = new Animal ("Lola Bunny", "Hembra");

console.log(BugsBunny);
console.log(LolaBunny);
console.log("\n");
BugsBunny.sonar(), BugsBunny.saludar();
console.log("\n");
LolaBunny.sonar(), LolaBunny.saludar();