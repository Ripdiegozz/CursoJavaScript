
// HERENCIA PROTOTIPICA

function Animal(nombre, genero) {

    this.nombre = nombre;
    this.genero = genero;

}

Animal.prototype.sonar = function (){
    console.log("Hago sonidos porque estoy vivo.") 
    
}

Animal.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}


function Perro(nombre, genero, size, raza){

    // Para hacer la herencia de las caracteristicas que ya se encuentran en el constructor "Animal" necesitamos
    // generar un super constructor que nos herede las dichas caracteristicas
    // (En este caso son "nombre" y "genero ") 

    this.super = Animal; // Aqui estamos diciendo que en el elemento super, su padre sera la funcion Animal
    this.super(nombre, genero); // Luego debemos ejecutar el metodo super 

    this.size = size;
    this.raza = raza;



}

// Hacer que perro herede directamente de Animal =>

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;    

// Sobreescritura de metodos del prototipo padre en el hijo

Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido")

}

Perro.prototype.ladrar = function(){
    console.log("Guau Guau !!!!")

}

const Snoopy = new Perro ("Snoopy", "Macho", "Grande", "Dalmata")

console.log(Snoopy)

Snoopy.sonar();
Snoopy.ladrar();
Snoopy.saludar();


