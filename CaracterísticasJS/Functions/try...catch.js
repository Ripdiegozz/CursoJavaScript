
// USAMOS EL TRY...CATCH PARA EL MANEJO DE ERRORES 

// ESTA FUNCION EN JAVASCRIPT NOS PERMITE MANEJAR NUESTROS ERRORES EN EL CODIGO PERSONALIZADAMENTE
// ES DECIR, SI NECESITAMOS QUE EN NUESTRO INPUT EL CLIENTE ENVIE NUMEROS, PERO ENVIA OTRO TIPO DE DATO
// PERSONALIZAR UN ERROR QUE DIGA: "DEBES INGRESAR UNICAMENTE NUMEROS", EJEMPLO:

try {
    let id_cliente = prompt("ingresa tu id: "); // Input de datos al cliente

    if (isNaN(id_cliente)){ // Validacion de si el caracter es un numero o no
        throw new Error("El caracter no es un número, debes ingresar ÚNICAMENTE números."); // Error personalizado
        // throw = Sentencia para lanzar una exepcion.
    };

    alert("Su ID se ha guardado satisfactoriamente."); // En caso de que la validacion se cumpla;
     
} catch (id_error) {
        console.log(`Se ha producido el siguiente ${id_error}`); // Error personalizado para 
        // el cliente
}