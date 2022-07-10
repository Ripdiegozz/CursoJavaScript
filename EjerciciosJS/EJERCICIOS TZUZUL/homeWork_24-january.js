// Escriba un programa para verificar si un número ingresado por el usuario es par o impar.

let numero_Usuario = prompt("Ingresa aquí un número:", "");
let tipoNumero = numero_Usuario %2 == 0 ? alert("Su número es par") : alert("Su número es impar");


// Escribe un programa para comprobar si un número es divisible por 7 o no.

let numero_Usuario2 = prompt("Ingresa aquí un número:", "");
let tipoNumero2 = numero_Usuario2 %7 == 0 ? alert("Su número es divisible entre 7") : alert("Su número no es divisible entre 7")

/*
        Escriba un programa para calcular la factura de electricidad (acepte el número de unidades del usuario) de acuerdo con los siguientes criterios:
            Precio unitario  
            Primeras 100 unidades sin cargo
            Siguientes 100 unidades kW 5 por unidad
            Después de 200 unidades kW 10 por unidad
            (Por ejemplo, si la unidad de entrada es 350, el monto total de la factura es kW2000)
*/

let unidadesUsuario = prompt("¿Cuantas unidades consumiste este mes?", "")
let unidades_sin_Cargo = 100

if (unidadesUsuario > 100 && unidadesUsuario <= 200){
    unidades_bajo = unidadesUsuario - unidades_sin_Cargo;
    precio_bajo = unidades_bajo * 5;
    precio_bajo_Alert = alert(`El monto total de su factura es Kw ${precio_bajo}`);    
} else if (unidadesUsuario > 200){
    unidades_alto = unidadesUsuario - unidades_sin_Cargo;
    operacion_alto = unidades_alto * 10;
    precio_bajo_Tope = 100 * 5;
    precio_alto = operacion_alto - precio_bajo_Tope;
    precio_alto_Alert = alert(`El monto total de su factura es Kw ${precio_alto}`);
} else if(unidadesUsuario <= 100){
    precio_Base = "Usted no tiene cargos adicionales";
    precio_base_Alert = alert(precio_Base);
}






