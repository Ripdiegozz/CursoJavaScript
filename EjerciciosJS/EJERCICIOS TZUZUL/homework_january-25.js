/*

Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a 
través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. 
Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. 
Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para 
un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero 
mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior 
al recomendado”

*/

var diametro_Usuario = prompt('¿Cuál es el diametro de su rueda? (En metros)', '');
var grosor_Usuario = prompt('¿Cuál es el grosor de su rueda? (En metros)', '');   

var diametro_Rueda = Number(diametro_Usuario);
var grosor_Rueda =  Number(grosor_Usuario);

if (diametro_Rueda > 1.4 && grosor_Rueda < 0.4 || diametro_Rueda <= 1.4 && diametro_Rueda > 0.8 && grosor_Rueda < 0.25){
    alert('El grosor de esta rueda es inferior al recomendado');
}   else if (diametro_Rueda > 1.4){
    alert('Esta rueda es para un vehiculo grande');
}   else if (diametro_Rueda <= 1.4 && diametro_Rueda > 0.8){
    alert('Esta rueda es para un vehiculo mediano');
}   else{
    alert('Esta rueda es para un vehiculo pequeño');
}

