`use strict`;
//Ejercicio 5 Escribir un programa para obtener el nombre de usuario de un correo electrónico.
let coreo = "nombredeuser@magbdigital.net";
let separador = coreo.indexOf("@");
let username = coreo.substring(0, separador);
alert(username);
