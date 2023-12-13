`use strict`;

//Ejercicio 2 Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.
let edificio = "01.24";
let separador = edificio.indexOf(".");
let piso = edificio.substring(0, separador);
alert(piso);
