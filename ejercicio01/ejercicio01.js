`use strict`;
//Ejercicio 1 Escribir un programa de extraiga las parte numérica de una placa de un auto.
let placa = "ABC-2030";
let separador = placa.indexOf("-");
let numeros = placa.substring(separador + 1);
alert(numeros);
