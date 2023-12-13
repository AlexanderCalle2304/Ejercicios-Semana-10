`use strict`;
//Ejercicio 3 Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10”

let fecha = "2022-10";
let separador = fecha.indexOf("-");
let mes = fecha.substring(separador + 1);
alert(mes);
