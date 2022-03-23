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