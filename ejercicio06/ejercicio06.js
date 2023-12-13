`use strict`;
//Ejercicio 6 Escribir un programa que obtenga el nombre de usuario de facebook desde la url.
let url = "facebook.com/nombreuser";
let separador = url.indexOf("/");
let usuario = url.substring(separador + 1);
alert(usuario);
