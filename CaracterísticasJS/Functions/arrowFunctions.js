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
  let c = 4;
  let d = 2;
  function funcionTradicional3(){
    return c + d + 100;
  }
  
  // Función flecha (sin argumentos)
  let e = 4;
  let f = 2;
  () => e + f + 100;


console.log(`// ARROW FUNCTIONS EN LOS OBJETOS`)

// En un objeto, la funcion tradicional es igual al contexto donde se encuentra, es decir, el objeto.
// Pero si usamos una arrow function el contexto no va a ser el objeto como en la funcion tradicional,
// la arrow function nos va a dar un contexto del objeto "window"

const gato = {
    nombre:"michu",
    color: "gris",
    edad: "tres años",
    tomar: function (){ // funcion tradicional => Esta nos va a devolver como contexto toda la funcion
        console.log("Tomando agua...")
        console.log(this)
    },
    maullar:() => {   // arrow function => Esta nos va a devolver como contexto todo el objeto "window"
        console.log("Miau, Miau!!")
        console.log(this)
    }
}