// EN JAVASCRIPT TODO ES UN OBJETO;
// LOS OBJETOS SE DECLARAN EN COSTANTES PORQUE ASI LA VARIABLE NO CAMBIA PERO EL OBJETO SI PUEDE CAMBIAR

// NORMALMENTE LAS CREAMOS DE ESTA MANERA

const a = {};
console.log(a);

const ab = new Object();
console.log(ab);

/* Dentro de un objeto a las variables se le van a llamar atributos/propiedades 
y a las funciones se les llaman metodos 
(esto aplica para muchas cosas ya que todo es un objeto en JavasScript)
*/

const diego = {
    "nombre":"Diego",
    "apellido":"Garcia",
    "edad":"18",
    "pasatiempo":"Jugar lol la ptm",
    contacto:{
        "email":"diegogarciag63@gmail.com",
        "telefono":"320-2923-961",
        "twiiter":"@Ripdiegozz"  
    },
}

// Para mostrar el value y key de un Object podemos utilizar el metodo FORin, el cual SOLO
// nos permite recorrer las propiedades de un objeto

for (const propiedad in diego) { 
    // Lo que llamamos 'propiedad' en este FORin es 
    //solo un nombre simbolico para la variable que representa las keys y los values
    
    console.log(`Key: ${propiedad}, value: ${diego[propiedad]}`);

    // Para iterar o acceder al value de una key colocamos el nombre 
    // del objeto y luego unas llaves ( [] )
    // En este caso; diego['nombre de la variable del FORin']
    
}




// CREAR UN AUTO

// const auto = {
//     "marca":"Nissan",
//     "color":"Blanco",
//     "modelo":"GTR",
//     "year":"2022",
//     acelerar(){
//         console.log('recorriste 10km!')
//     }
// }

// CREAR CLASE AUTO

console.log(`\n /************** Tarea: crear un auto **************/ \n`);

class auto{
    constructor(marca, color, modelo, year){

    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.year = year;
    }    

    arrancar(){
        console.log(`Tu auto ${marca} ha arrancado!`)
    }

    detener(){
        console.log(`Tu auto ${marca} se ha detenido! :C`)
    }

    moverse(lado){
        if (lado == "arriba"){
                console.log(` Moviendo a la arriba`)
            } else if (lado == "abajo"){
                console.log(` Moviendo a la abajo`) 
            } else if (lado == "izquierda"){
                console.log(` Moviendo a la izquierda`)
            } else if (lado == "derecha"){
                console.log(` Moviendo a la derecha`)
            }
    }  
}      

const nissan = new auto("Nissan", "White", "GTR", "2022")

console.log(nissan);

const lamborgini = new auto("Lamborgini", "red", "spider", "2022")

console.log(lamborgini)
console.log(lamborgini.moverse("izquierda"))