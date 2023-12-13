`use strict`;
//Ejercicio 4 Escribir un programa que obtenga las iniciales de un jugador de futbol, sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

let jugador = "MAGB-20";
let separador = jugador.indexOf("-");
let iniciales = jugador.substring(0, separador);
alert(iniciales);
