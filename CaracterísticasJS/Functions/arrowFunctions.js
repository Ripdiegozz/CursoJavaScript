console.log(`// ES UNA MANERA MAS FACIL DE DECLARAR FUNCIONES Y NOS PERMITE DECLARAR FUNCIONES ANONIMAS`);

// Función tradicional

function funcionTradicional (a){
    return a + 100;
  }
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  a => a + 100;

console.log(`// FUNCION FLECHA CON VARIOS ARGUMENTOS`);

// Función tradicional
function funcionTradicional2 (a, b){
    return a + b + 100;
  }
  
  // Función flecha
  (a, b) => a + b + 100;
  
  // Función tradicional (sin argumentos)
  let a = 4;
  let b = 2;
  function funcionTradicional3(){
    return a + b + 100;
  }
  
  // Función flecha (sin argumentos)
  let a = 4;
  let b = 2;
  () => a + b + 100;


console.log(`// ARROW FUNCTIONS EN LOS OBJETOS`)

// En un objeto, la funcion tradicional es igual al contexto donde se encuentra, es decir, el objeto.
// Pero si usamos una arrow function el contexto no va a ser el objeto como en la funcion tradicional,
// la arrow function nos va a dar un contexto del objeto "Window"

const gato = {
    nombre:"michu",
    color = "gris",
    edad = "tres años",
    tomar = function (){ // funcion tradicional
        console.log("Tomando agua...")
        console.log(this)
    },
    maullar = () => {   // arrow function
        console.log("Miau, Miau!!")
        console.log(this)
    }
}