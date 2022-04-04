
console.log(Date()); // Fecha y hora local junto con tipo de horario

let fecha = new Date();

console.log(fecha); // Fecha y hora local guardada en una variable

// FECHAS

console.log(fecha.getDate()); // Obtener dia de la fecha

// Dia de la semana = D  L  M  M  J  V  S --> 
//                    0  1  2  3  4  5  6

console.log(fecha.getDay()); // Obtener dia de la semana

// Ene - Feb - Mar - Abr - Mayo - Jun - Jul - Ago - Sep - Oct - Nov - Dic -->
//  0     1     2     3      4     5     6     7     8     9    10    11

console.log(fecha.getMonth()); // Obtener mes del año

console.log(fecha.getFullYear()); // Obtener Año completo 

// TIEMPO

console.log(fecha.getHours()); // Obtener solo Hora

console.log(fecha.getMinutes()); // Obtener solo minutos

console.log(fecha.getSeconds()); // Obtener solo segundos


// Fecha y tiempo

console.log(fecha.toString()); // Otra manera de obtener la fecha completa

console.log(fecha.toDateString()); // Solo la fecha en formato extenso

console.log(fecha.toLocaleString()); // Fecha y hora en formato calendario

console.log(fecha.toLocaleDateString()); // Solo fecha en formato calendario

console.log(fecha.toLocaleTimeString()); // Solo hora en formato calendario


// Tipos de horario

console.log(fecha.getTimezoneOffset()); // Minutos lejos de la zona 0

console.log(Date.now()); // Cuantos segundos han pasado desde el 1 de enero de 1970 (Time Stamp)


// Los metodos que tengan UTC son los del horario central (Londres)

console.log(fecha.getUTCDate()); // Nos dara la fecha del horario central

console.log(fecha.getUTCHours()); // Nos dara la hora del horario central

// Calcular tiempo pasado desde una fecha en especifico

let cumpleDiego = new Date(2004,01,04); // Año - Posicion Array de mes - Dia

console.log(cumpleDiego)

console.log(cumpleDiego.toLocaleString());







